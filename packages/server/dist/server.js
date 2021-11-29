"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const book_routes_1 = require("./routes/book-routes");
const author_routes_1 = require("./routes/author-routes");
const search_routes_1 = require("./routes/search-routes");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use((0, helmet_1.default)());
exports.app.use((0, cors_1.default)());
exports.app.use("/books", book_routes_1.bookRouter);
exports.app.use("/authors", author_routes_1.authorRouter);
exports.app.use("/search", search_routes_1.searchRouter);
//# sourceMappingURL=server.js.map