import { bookController } from "../controllers/book-controller";

const Router = require("express").Router;

const bookRouter = Router();

bookRouter.get("/", bookController.getAll);

bookRouter.get("/:id", bookController.getById);

export { bookRouter };
