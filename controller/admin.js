const Product = require("../model/product");

exports.getAddProduct = (req, res, next) => {
  res.render("edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const productCategory = req.body.productCategory;
  const name = req.body.name;
  const purchasingPrice = req.body.purchasingPrice;
  const sellingPrice = req.body.sellingPrice;
  const productQuantity = req.body.productQuantity;
  const productImage = req.body.productImage;
  const productColour = req.body.productColour;
  const productDescription = req.body.productDescription;
  const featureName = req.body.featureName;
  const featureValue = req.body.featureValue;
  const productStatus = req.body.productStatus;

  const product = new Product({
    productCategory,
    name,
    purchasingPrice,
    sellingPrice,
    productQuantity,
    productImage,
    productColour,
    productDescription,
    productFeatures: { featureName: featureName, featureValue: featureValue },
    productStatus,
  });

  product
    .save()
    .then((result) => {
      console.log("Created Product");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.pid;
  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      res.render("edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
        productId: prodId,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const uproductCategory = req.body.productCategory;
  const uname = req.body.name;
  const upurchasingPrice = req.body.purchasingPrice;
  const usellingPrice = req.body.sellingPrice;
  const uproductQuantity = req.body.productQuantity;
  const uproductImage = req.body.productImage;
  const uproductColour = req.body.productColour;
  const uproductDescription = req.body.productDescription;
  const ufeatureValue = req.body.featureValue;
  const uproductStatus = req.body.productStatus;
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then((product) => {
      (product.productCategory = uproductCategory),
        (product.name = uname),
        (product.purchasingPrice = upurchasingPrice),
        (product.sellingPrice = usellingPrice);
      (product.productQuantity = uproductQuantity),
        (product.productImage = uproductImage),
        (product.productColour = uproductColour),
        (product.productDescription = uproductDescription),
        (product.productFeatures = [{ ufeatureName: ufeatureValue }]),
        (product.productStatus = uproductStatus);
      return product.save();
    })
    .then((result) => {
      console.log("UPDATED PRODUCT!");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteOne({ _id: prodId })
    .then(() => {
      console.log("DESTROYED PRODUCT");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
