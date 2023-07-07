import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Routes from "./routes/route.js";
const app = express();
import connectToMongo from "./db.js";
const port = process.env.PORT || 5000;
connectToMongo();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
