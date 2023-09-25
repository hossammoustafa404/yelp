const router = require("express").Router();
const restuarantsRouter = require("./restaurants");
const reviewsRouter = require("./reviews");

router.use("/restaurants", restuarantsRouter);
router.use("/reviews", reviewsRouter);

module.exports = router;
