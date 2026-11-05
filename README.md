# ProductCatalogueDataModel
"A modular JavaScript console application for managing a product catalogue using ES Modules, arrays of objects, utility functions, and inventory operations."

# Product Catalogue Data Model

A robust, modular console-based JavaScript application designed to manage a product inventory using modern **ES Modules (`import`/`export`)**, arrays of objects, and utility functions.

## Features
- **Unique ID Lookups:** Instantly find products using their unique IDs.
- **Category Filtering:** Filter items seamlessly by their respective categories (e.g., Electronics, Stationery).
- **Price Sorting:** Sort products by price in ascending or descending order.
- **Dynamic Inventory Management:** Add new products with validation checks and update existing stock levels.
- **ES Modules Architecture:** Clean separation of concerns across multiple modular files (`data.js`, `catalogue.js`, and `app.js`).

## Project Structure
- `data.js` — Stores the raw array of product objects.
- `catalogue.js` — Contains utility functions for searching, filtering, sorting, and updating inventory.
- `app.js` — The main entry point that executes and tests all catalogue operations.

## Tech Stack
- **JavaScript (ES6+)**
- Node.js (ES Modules enabled via `"type": "module"`)
