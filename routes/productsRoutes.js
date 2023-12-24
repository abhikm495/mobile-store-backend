import {
  // brainTreePaymentController,
  // braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import express from "express";
import formidable from "express-formidable";

const productRoutes = express.Router();

productRoutes.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

productRoutes.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

productRoutes.get("/get-product", getProductController);

productRoutes.get("/get-product/:slug", getSingleProductController);

productRoutes.get("/product-photo/:pid", productPhotoController);

productRoutes.delete("/delete-product/:pid", deleteProductController);

productRoutes.post("/product-filters", productFiltersController);

productRoutes.get("/product-count", productCountController);

productRoutes.get("/product-list/:page", productListController);

productRoutes.get("/search/:keyword", searchProductController);

// productRoutes.get("/braintree/token", braintreeTokenController);

// productRoutes.post(
//   "/braintree/payment",
//   requireSignIn,
//   brainTreePaymentController
// );

export default productRoutes;
