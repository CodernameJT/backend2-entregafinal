import { productModel } from "./models/product.model.js";

class ProductDao {
  async getAll(query, options) {
    try {
      return await productModel.paginate(query, options);
    } catch (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
  }

  async getById(id) {
    try {
      return await productModel.findById(id);
    } catch (error) {
      throw new Error(`Error fetching product by ID: ${error.message}`);
    }
  }

  async create(data) {
    try {
      return await productModel.create(data);
    } catch (error) {
      throw new Error(`Error creating product: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      return await productModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error(`Error updating product: ${error.message}`);
    }
  }

  async deleteOne(id) {
    try {
      return await productModel.findByIdAndUpdate(id, { status: false }, { new: true });
    } catch (error) {
      throw new Error(`Error deleting product: ${error.message}`);
    }
  }
}

export const productDao = new ProductDao();