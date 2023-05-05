const Product = require("../model/product");

exports.getProducts = (req, res, next) => {
    Product.find()
      .then((products) => {
        console.log(products);
        res.render("home", {
          prods: products,
          pageTitle: "All Products",
          path: "/",
        });
      })
      .catch((err) => console.log(err));
  };