const express = require("express");
const router = express.Router();

// const multer = require("multer");
// const path = require("path");

const {
  getDonuts,
  createDonut,
  getDonutById,
  updateDonut,
  deleteDonut,
} = require("../controllers/donutsController");



router.get("/", getDonuts);
router.post("/", createDonut);
router.get("/:id", getDonutById);
router.put("/:id", updateDonut);
router.delete("/:id", deleteDonut);

// CUANDO GTRATO DE HACER LA PRUEBA DE SUBIDA DESDE THUNDER ME DICE QUE ES DE PAGO. NO BORRO PQ QUIERO BICHEARLO EN OTRO MOMENTO.ELIMINO CARPETA UPLOAD
// Configuración de almacenamiento para las imágenes
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Carpeta donde se guardarán las imágenes
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Nombre único
//   },
// });

// const upload = multer({ storage });

// // Ruta para subir una imagen
// router.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "No se subió ninguna imagen" });
//   }
//   res.json({ imageUrl: `/uploads/${req.file.filename}` }); // Enviar la URL
// });


module.exports = router;
