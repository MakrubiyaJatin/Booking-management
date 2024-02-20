const router = require("express").Router()
const authRoutes = require("./auth");
const bookingRoutes = require("./booking");

router.use('/auth',authRoutes)
router.use("/booking",bookingRoutes);
module.exports = router