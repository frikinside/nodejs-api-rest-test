const express = require("express");
const testController = require("../controllers/test");

const router = express.Router();

router.route("/").get(testController.list);
router.route("/save/:name?").get(testController.save);
router.route("/request/:param?").all(testController.request);

router.route("/:id([a-z0-9]{24})").get(testController.getById);
router.route("/:name").get(testController.getByName);
router.route("/:name/increment").get(testController.increment);

module.exports = router;
