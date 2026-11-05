// app.js
import { products } from './data.js';
import { 
  findProductById, 
  filterByCategory, 
  sortProductsByPrice, 
  addProduct, 
  updateStock 
} from './catalogue.js';

console.log("    PRODUCT CATALOGUE MANAGER REPORT    ");

// ID 1 wale product ko search karna
console.log("\n Find Product (ID: 1):");
console.log(findProductById(1));

// 'Electronics' category ke products filter karna
console.log("\n Filter by Category ('Electronics'):");
console.log(filterByCategory("Electronics"));

// Price ke hisaab se high to low sort karna
console.log("\n Sort Products by Price (High to Low):");
console.log(sortProductsByPrice(false));

// Naya product object banana aur add karna
const mouse = {
  id: 3,
  name: "Wireless Mouse",
  category: "Electronics",
  price: 1200,
  stock: 25,
  specs: { dpi: "1600", connectivity: "Bluetooth" },
  variants: ["Black", "White"]
};
console.log("\n Add Product Test:");
console.log(addProduct(mouse));

// Notebook (ID: 2) ka stock update karke 75 karna
console.log("\n Update Stock Test:");
console.log(updateStock(2, 75)); 
console.log("Updated Notebook Details:", findProductById(2));