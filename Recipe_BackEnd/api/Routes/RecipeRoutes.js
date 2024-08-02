const express = require("express");
const router = express.Router();
const Menu = require("../models/Recipe");

// Define your routes here
router.get("/", async (req, res) => {
  try {
    const recipes = await Menu.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Export the router
module.exports = router;
