const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  productCategory: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  purchasingPrice: {
    type: Number,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },

  productQuantity: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  productColour: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productFeatures:
    {
      featureName: String,
      featureValue: String,
    }
  ,
  productStatus: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
