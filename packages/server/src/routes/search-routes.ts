import { searchController } from "../controllers/search-controller";

const Router = require("express").Router;

const searchRouter = Router();

searchRouter.get("/books", searchController.searchBooks);
searchRouter.get("/authors", searchController.searchAuthors);

export { searchRouter };
