const express = require('express');
const router = express.Router();

const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

/*everytime user search happen below method will get call*/
router.param("userId", userById);

/*
userById is a middleware that automatically runs and make "req.profile: user" each time there is "userId" in req.params
*/

module.exports = router;