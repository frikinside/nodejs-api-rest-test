const express = require("express");
const testController = require("../controllers/test");

const router = express.Router();

router.route("/save").get(testController.save);
router.route("/request").all(testController.request);
router.route("/request/:param").all(testController.request);

module.exports = router;
