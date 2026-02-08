const express = require("express");
const router = express.Router();

const ejemploRoutes = require("./modules/ejemplos/modules.routes.js");

router.use("/ejemplo", ejemploRoutes);

module.exports = router;
