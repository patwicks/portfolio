const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const emailRoute = require("./email.routes");
const app = express();

// middlewares
dotenv.config();
app.use(express.json());
app.use(cors());
//{ origin: "https://dev-pat.netlify.app/"}

//app routes middlewares
app.use("/v1/ap1/send", emailRoute);

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is listeing to port ${port} ...`));
