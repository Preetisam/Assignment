let express = require("express");
let productsRouter = express.Router();
let productsController = require("./../controller/products.controller");

productsRouter.get("/products", productsController.getAllProducts);
productsRouter.get("/products/:productsId",productsController.getProductsById);
 module.exports = productsRouter;