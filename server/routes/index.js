const express = require("express");
const router = express.Router();
const v1 = require("./api-v1");

router.use("/api/v1/", v1);

module.exports = router;
