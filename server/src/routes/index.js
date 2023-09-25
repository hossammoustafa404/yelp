const router = require("express").Router();
const restuarantsRouter = require("./restaurants");

router.use("/restaurants", restuarantsRouter);

module.exports = router;
