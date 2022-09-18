const User = require('../models/user');

//find user by id
exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => { //exec - execute
        if (err || !user) {
            return res.status(400).json({ error: `USER WITH USER ID ${id} NOT FOUND` });
        }
        user.salt = undefined;
        user.hashed_password = undefined;

        req.profile = user;

        // res.json({ user })
        next();
    });
};