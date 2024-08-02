const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
//console.log(process.env.DB_USER);

//middleware
app.use(cors());
app.use(express.json());

//nisalachamodya63
//iyjAc1kt65dkx25s

//const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@recipe-mobile-app.nzrg6or.mongodb.net/?appName=Recipe-Mobile-App`;
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@recipe-mobile-app.nzrg6or.mongodb.net/?appName=Recipe-Mobile-App`
  )
  .then(console.log("Mongo DB Connected Successfully"))
  .catch((error) => console.log("Error is Connecting to Mongo db", error));

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
/*const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/

//import routes here
const recipeRoutes = require("./api/Routes/RecipeRoutes");
app.use("/recipe", recipeRoutes); //mongo db ekt data daapn
app.get("/", (req, res) => {
  res.send("Hello Worlddd!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
