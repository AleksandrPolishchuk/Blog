import express from "express";
import fileUpload from "express-fileupload";

const app = express();

app.listen(5000, () => {
  console.log("Server started");
});
