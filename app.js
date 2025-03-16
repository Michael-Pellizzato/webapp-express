import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server Books in funzione sulla porta: ${port}`);
});
