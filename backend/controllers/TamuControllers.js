import Tamu from "../models/Tamu.js";

export const getTamu = async (req, res) => {
  try {
    const tamu = await Tamu.findAll();
    res.status(200).json(tamu);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const geTamuById = async (req, res) => {
  try {
    const tamu = await Tamu.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tamu);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTamu = async (req, res) => {
  try {
    const tamu = await Tamu.create(req.body);
    res.status(201).json({ msg: "Tamu berhasil ditambahkan" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTamu = async (req, res) => {
  try {
    const tamu = await Tamu.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Tamu berhasil diupdate" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTamu = async (req, res) => {
  try {
    const tamu = await Tamu.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Tamu berhasil dihapus" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
