import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import { bookRouter } from "./routes/book-routes";
import { authorRouter } from "./routes/author-routes";
import { searchRouter } from "./routes/search-routes";

export const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/search", searchRouter);
