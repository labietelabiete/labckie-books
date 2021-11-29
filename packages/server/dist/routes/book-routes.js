"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const book_controller_1 = require("../controllers/book-controller");
const Router = require("express").Router;
const bookRouter = Router();
exports.bookRouter = bookRouter;
bookRouter.get("/", book_controller_1.bookController.getAll);
bookRouter.get("/:id", book_controller_1.bookController.getById);
//# sourceMappingURL=book-routes.js.map