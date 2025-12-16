const express = require("express");
const { createproduct, getProducts, getProductById } = require("../controllers/productcontrollers");

const router = express.Router();

router.post('/', createproduct);
router.get('/', getProducts);
router.get('/:id', getProductById);

module.exports = router;