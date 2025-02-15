import { request, response } from "express";
import { productDao } from "../dao/mongo/product.dao.js";

export const checkProductData = async (req = request, res = response, next) => {
  try {
    const { title, description, price, code, stock, category } = req.body;
    const newProduct = { title, description, price, code, stock, category };

    const productExists = await productDao.getAll({ code });
    if (productExists.docs.length > 0) {
      return res.status(400).json({ status: "Error", msg: `El producto con el código ${code} ya existe` });
    }

    const checkData = Object.values(newProduct).includes(undefined);
    if (checkData) {
      return res.status(400).json({ status: "Error", msg: "Todos los datos son obligatorios" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
  }
};