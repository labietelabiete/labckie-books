import { authorController } from "../controllers/author-controller";

const Router = require("express").Router;

const authorRouter = Router();

authorRouter.get("/", authorController.getAll);

authorRouter.get("/:id", authorController.getById);

export { authorRouter };
