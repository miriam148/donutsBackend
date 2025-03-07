const express = require("express");
const {
  getDonuts,
  createDonut,
  getDonutById,
  updateDonut,
  deleteDonut,
} = require("../controllers/donutsController");

const router = express.Router();

router.get("/", getDonuts);
router.post("/", createDonut);
router.get("/:id", getDonutById);
router.put("/:id", updateDonut);
router.delete("/:id", deleteDonut);

module.exports = router;
