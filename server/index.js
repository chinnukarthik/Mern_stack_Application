import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./database/database.js";
import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";
import commentRoute from "./routes/comment.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://mern-stack-application-38nc.onrender.com",
    credentials: true,
  })
);

const _dirname = path.resolve();
// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/blog", blogRoute);
app.use("/api/v1/comment", commentRoute);

app.use(express.static(path.join(_dirname, "/client/dist")));
// app.get("*", (_, res) => {
//   res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
// });

// Start server after DB connects
const PORT = process.env.PORT || 3000;

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" Failed to connect to DB:", err);
  });
