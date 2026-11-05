// catalogue.js
// data.js se products array ko import kar rahe hain
import { products } from './data.js';

// 1. ID se product dhundhna (.find() method ka use)
export function findProductById(id) {
  const product = products.find(p => p.id === id);
  return product || "Product not found";
}

// 2. Category ke mutabiq filter karna (.filter() method ka use)
export function filterByCategory(categoryName) {
  return products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
}

// 3. Price ke hisaab se sort karna (.sort() method ka use)
export function sortProductsByPrice(ascending = true) {
  // Spread operator [...] ka use karke original array ko modify hone se bacha rahe hain
  return [...products].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
}

// 4. Naya product add karna (.some() aur .push() ka use)
export function addProduct(newProduct) {
  // Check karte hain ki ID pehle se toh nahi hai (.some())
  const exists = products.some(p => p.id === newProduct.id);
  if (exists) {
    return `Error: Product with ID ${newProduct.id} already exists!`;
  }
  products.push(newProduct);
  return `Success: '${newProduct.name}' added to catalogue.`;
}

// 5. Stock update karna
export function updateStock(id, newStock) {
  const product = findProductById(id);
  if (typeof product === "string") return product;
  
  product.stock = newStock;
  return `Success: Stock for '${product.name}' updated to ${newStock}.`;
}