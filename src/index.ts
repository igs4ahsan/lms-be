import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.get("/", async (req, res) => {
  console.log("Server seded logs triggered");
  //
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
