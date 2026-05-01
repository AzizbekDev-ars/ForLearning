import { Products } from "../data/db.js";
import Product from "../models/Product.js";
import { log } from "../utils/logger.js";

class ProductService{
    createProduct(name, price){
        const newProduct = new Product(Products.length + 1, name, price)
        Products.push(newProduct);
        return newProduct;
    };
    updateProduct(id, name, price){
        let product = Products.find(x => x.id == id);
        if(!product){
            log("Product topilmadi")
        }
        product.name = name;
        product.price = price;
        return product
    };
    deleteProduct(id){
        Products.filter(x => x.id == id)
    }
    getAllProducts(){
        return Products;
    }
}

export default new ProductService();