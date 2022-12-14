const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const handleProduct = require("./routes/ProductRoute");
const handleVendor = require("./routes/VendorRoute");
const handleCart = require("./routes/CartRoute");
const handleWishlist = require("./routes/WishlistRoute");
const hadnleReview = require("./routes/ReviewRoute");
const handleUser = require("./routes/UserRoute");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

// mongoose connect
mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => {
    console.log("database connect");
  })
  .catch((err) => {
    err.message;
  });

// payment
app.post("/create-payment-intent", async (req, res) => {
  const service = req.body;
  const price = service.price;
  const amount = price * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({ clientSecret: paymentIntent.client_secret });
});

// product
app.use("/product", handleProduct);

//vendor
app.use("/vendor", handleVendor);
//cart Route
app.use("/cart", handleCart);

// wishlist
app.use("/wishlist", handleWishlist);

// reivew
app.use("/review", hadnleReview);
// user
app.use("/user", handleUser);

app.get("/", (req, res) => {
  res.send("hello from eTrade");
});

app.listen(port, () => {
  console.log("listenig port 3000");
});
