const express = require('express');
const router =  express.Router();
const cartController = require("../controller/cartController")

router.post("/cart", cartController.addItemToCart)
router.get("/cart", cartController.getCart);
router.delete("/empty-cart", cartController.emptyCart)
  module.exports = router;
  