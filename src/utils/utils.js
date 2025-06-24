// src/utils/options.js

export const categoryOptions = [
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "groceries", label: "Groceries" },
  { value: "books", label: "Books" },
  { value: "furniture", label: "Furniture" },
  { value: "other", label: "Other" },
];

export const stockStatusOptions = [
  { value: "in_stock", label: "In Stock" },
  { value: "out_of_stock", label: "Out of Stock" },
  { value: "low_stock", label: "Low Stock" },
];

export const sortOptions = [
  { value: "name_asc", label: "Name (A-Z)" },
  { value: "name_desc", label: "Name (Z-A)" },
  { value: "price_low_high", label: "Price (Low to High)" },
  { value: "price_high_low", label: "Price (High to Low)" },
];
