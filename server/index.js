import express from "express";
import "dotenv/config";
import router from "./routers/index.js";
import db from "./configs/db.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

db();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Image Folder
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    res.json({
        message: "Server is running!"
    });
});

app.use("/api", router);

app.listen(PORT, (err) => {

    if (err) {

        console.log(err);

    } else {

        console.log(`Server is running on port ${PORT}`);

        console.log(`http://localhost:${PORT}`);

    }

});