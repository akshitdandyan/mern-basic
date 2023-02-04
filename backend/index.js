import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({ origin: "http://127.0.0.1:5173" }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/get-profile", (req, res) => {
    res.status(200).json({
        name: "Akshit Dandyan",
        age: 50,
    });
});

app.post("/make-new-account", (req, res) => {
    const data = req.body;
    console.log("data from frontend", data);
    if (data.password.length < 5) {
        res.status(400).json({
            message: "Password is too short",
        });
    } else {
        res.status(200).json({
            message: "Account created successfully",
        });
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
