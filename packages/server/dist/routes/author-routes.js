"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRouter = void 0;
const author_controller_1 = require("../controllers/author-controller");
const Router = require("express").Router;
const authorRouter = Router();
exports.authorRouter = authorRouter;
authorRouter.get("/", author_controller_1.authorController.getAll);
authorRouter.get("/:id", author_controller_1.authorController.getById);
//# sourceMappingURL=author-routes.js.map