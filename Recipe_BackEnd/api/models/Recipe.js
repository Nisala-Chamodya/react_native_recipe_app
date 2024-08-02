const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create schema object for menu item
const recipeSchema = new Schema({
  idCategory: String,
  strCategory: String,
  strCategoryThumb: String,
  strCategoryDescription: String,
});

// Create model
const Menu = mongoose.model("Recipe", recipeSchema);
module.exports = Menu;
