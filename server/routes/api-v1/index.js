const express = require("express");
const middleweres = require("../../core/middleweres");
const router = express.Router();
const auth = require("./auth");
const admin = require("./admin");

router.use(auth);
router.use("/admin", middleweres.isAdmin);
router.use("/admin", admin);

module.exports = router;
