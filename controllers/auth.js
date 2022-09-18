const User = require('../models/user');
const { errorHandler } = require('../helpers/dbErrorHandler');
const jwt = require('jsonwebtoken'); //to generate signin token
const { expressjwt: expressJWT } = require('express-jwt'); //for authorization token

exports.sayHi = (req, res) => {
    res.json({ message: "Hello there api" });
};

exports.signUp = (req, res) => {
    const users = new User(req.body);
    users.save((err, user) => {
        if (err) {
            return res.status(400).json({ err: errorHandler(err) });
        }
        res.json({
            user
        });
    });
};

exports.signIn = (req, res) => {
    //find user based on email
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                err: 'User not exist. PLease signUp!'
            });
        }
        //If user found make sure email and password matches

        // create authenticate menthod in model
        if (!user.authenticate(password)) {
            return res.status(401).json({
                err: 'email and password doest match'
            });
        }

        //generate signin token with user id and secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        //persist token with token in cookie with expiry date
        res.cookie('token', token, { expiry: new Date() + 9999 });

        //return response to the client with user and token
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, name, email, role } });
    });
};

exports.signOut = (req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'Sign out successfully' });
};

//for protected routing
exports.requireSignin = expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && (req.profile._id.toString() === req.auth._id.toString());
    if (!user) {
        return res.status(403).json({
            error: `Access denied ${req.profile.id} and ${req.auth._id}`
        });
    }
    next();
};

exports.isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
        return res.status(403).json({
            error: "Admin resourse. Access denied"
        });
    }
    next();
};