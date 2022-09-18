const express = require('express');
const router = express.Router();

const { signUp, sayHi, signIn, signOut, requireSignin } = require("../controllers/auth");
const { userSignUpValidator } = require('../validator/index');
router.post("/signup", userSignUpValidator, signUp);
router.post('/signin', signIn);
router.get('/signout', signOut);

router.get("/hello", requireSignin, (req, res) => {
    res.send("hello there");
});

router.get("/sayhi", sayHi);
// router.get("/", (req, res) => {
//     res.send("Hello routes");
// });




module.exports = router;