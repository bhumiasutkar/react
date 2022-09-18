exports.userSignUpValidator = (req, res, next) => {
    req.check('name', 'name is required').notEmpty();
    req.check('email', 'email is required').matches(/.+\@.+\..+/).withMessage('Email must be valid').isLength({
        min: 5,
        max: 32
    });
    req.check('password', 'password is required').notEmpty();
    req.check('password').isLength({ min: 6 }).withMessage('password must be min 6 charecter').matches(/\d/).withMessage('Password must containt a number');

    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(err => err.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};