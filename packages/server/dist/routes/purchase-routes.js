"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseRouter = void 0;
const purchase_controller_1 = require("../controllers/purchase-controller");
const Router = require("express").Router;
const purchaseRouter = Router();
exports.purchaseRouter = purchaseRouter;
purchaseRouter.post("/", purchase_controller_1.purchaseController.create);
//# sourceMappingURL=purchase-routes.js.map