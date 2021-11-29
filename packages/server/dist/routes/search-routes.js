"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRouter = void 0;
const search_controller_1 = require("../controllers/search-controller");
const Router = require("express").Router;
const searchRouter = Router();
exports.searchRouter = searchRouter;
searchRouter.get("/books", search_controller_1.searchController.searchBooks);
searchRouter.get("/authors", search_controller_1.searchController.searchAuthors);
//# sourceMappingURL=search-routes.js.map