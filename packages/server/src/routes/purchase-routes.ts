import { purchaseController } from "../controllers/purchase-controller";

const Router = require("express").Router;

const purchaseRouter = Router();

purchaseRouter.post("/", purchaseController.create);

export { purchaseRouter };
