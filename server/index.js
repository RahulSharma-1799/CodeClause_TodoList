import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Routes from "./routes/route.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express();
import connectToMongo from "./db.js";
const port = process.env.PORT || 5000;
connectToMongo();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
