const Donut = require("../models/Donut");

// Obtener todos los donuts
exports.getDonuts = async (req, res) => {
  try {
    const donuts = await Donut.find();
    res.json(donuts);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

// Crear un nuevo donut
exports.createDonut = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  try {
    const newDonut = new Donut({ name, description, price, imageUrl });
    await newDonut.save();
    res.status(201).json(newDonut);
  } catch (error) {
    res.status(500).json({ msg: "Error al crear el donut" });
  }
};

// Obtener un donut por ID
exports.getDonutById = async (req, res) => {
  try {
    const donut = await Donut.findById(req.params.id);
    if (!donut) return res.status(404).json({ msg: "Donut no encontrado" });
    res.json(donut);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

// Actualizar un donut
exports.updateDonut = async (req, res) => {
  try {
    const updatedDonut = await Donut.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDonut) return res.status(404).json({ msg: "Donut no encontrado" });
    res.json(updatedDonut);
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar el donut" });
  }
};

// Eliminar un donut
exports.deleteDonut = async (req, res) => {
  try {
    const deletedDonut = await Donut.findByIdAndDelete(req.params.id);
    if (!deletedDonut) return res.status(404).json({ msg: "Donut no encontrado" });
    res.json({ msg: "Donut eliminado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar el donut" });
  }
};