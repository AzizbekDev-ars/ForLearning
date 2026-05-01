import UserServices from "./services/UserServices.js";
import ProductService from "./services/ProductService.js";
import { log } from "./utils/logger.js";

// User qo'shish
const user1 = UserServices.createUser("Ali", "ali@gmail.com");
const user2 = UserServices.createUser("Vali", "vali@gmail.com");

// Product qo'shish
const pruduct1 = ProductService.createProduct("laptop", 1200);
const product2 = ProductService.createProduct("phone", 800);
const product3 = ProductService.createProduct("phone", 800);

// UpdateUser
UserServices.UpdateUser(2,"Aziz", "aziz@gmail.com")

// natija
log("Users:");
console.log(UserServices.getAllUsers());

log("Products:");
console.log(ProductService.getAllProducts())