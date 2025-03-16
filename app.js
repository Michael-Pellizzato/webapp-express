import express from "express";

const app = express();
const port = 3000;
import moviesRouter from "./routes/moviesRouter.js";

app.use(express.json());
app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Server movies in funzione sulla porta: ${port}`);
});
