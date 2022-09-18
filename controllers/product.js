const { errorHandler } = require('../helpers/dbErrorHandler');
const Product = require('../models/product');

exports.create = (req, res) => {
    const product = new Product(req.body);
    product.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: errorHandler(err)
            });
        }
        res, json({ data });
    });
};