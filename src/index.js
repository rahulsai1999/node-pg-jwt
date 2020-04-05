//libraries
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

//database
import { sequelize, connectAuthenticate } from "./controllers/dbConnect";

//routes
import blogRoutes from "./routes/blogRoute";

//test connection
connectAuthenticate();
sequelize.sync();

//utilities
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  res.send("Hello from the server side");
});

app.use(blogRoutes);

app.listen(5000, () => {
  console.log("Running on", 5000);
});
