const express = require('express');
const router = express.Router();

const { create, productById, read, remove, update } = require('../controllers/product');
const { userById } = require("../controllers/user");
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");

router.post('/product/create/:userId', requireSignin, isAdmin, isAuth, create);
router.get('/product/:productId', read);
router.delete('/product/:productId/:userId', requireSignin, isAdmin, isAuth, remove);
router.put('/product/:productId/:userId', requireSignin, isAdmin, isAuth, update);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;