const mongoose = require('mongoose');
const crypto = require('crypto'); // pure node JS module used to create password
//const { v1: uuidv1 } = require('uuid'); //to generate uniqu string //npm i uuid
const uuidv1 = require('uuidv1');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    hashed_password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        trim: true,
    },
    salt: {
        type: String
    },
    role: { // used to generate password
        type: Number,
        default: 0
    },
    history: { // to see user purchase history
        type: Array,
        default: []
    }
}, { timeStamps: true });

//virtual field

userSchema.virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    }).get(function () {
        return this.password;
    });

//add methodes in schema
userSchema.methods = {
    encryptPassword: function (password) {
        if (!password) return '';
        try {
            return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
        } catch (err) {
            return '';
        };
    },
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    }
};

module.exports = mongoose.model('User', userSchema);