"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchController = void 0;
const models_1 = __importDefault(require("../models"));
function searchBooks(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const searchText = (_a = req.query) === null || _a === void 0 ? void 0 : _a.q;
            const { limit = 8 } = req.query;
            // const books: Book[] = await db.Book.find(
            //   {
            //     $or: [
            //       { title: { : searchText, $options: "i" } },
            //       { caption: { $regex: searchText, $options: "i" } },
            //     ],
            //   },
            //   {
            //     title: 1,
            //     caption: 1,
            //     price: 1,
            //     stock: 1,
            //     authorId: 1,
            //     createdAt: 1,
            //   },
            //   {
            //     $sort: {
            //       createdAt: -1,
            //     },
            //   },
            // ).limit(limit);
            return res.status(200).send({ message: "Successfully searched" });
        }
        catch (error) {
            res.status(500).send({
                error: error.message,
            });
            next(error);
        }
    });
}
function searchAuthors(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const searchText = (_a = req.query) === null || _a === void 0 ? void 0 : _a.q;
            const { limit = 8 } = req.query;
            const authors = yield models_1.default.Author.find({
                $or: [
                    { title: { $regex: searchText, $options: "i" } },
                    { caption: { $regex: searchText, $options: "i" } },
                ],
            }, {
                firstName: 1,
                lastName: 1,
                picture: 1,
                createdAt: 1,
            });
            // {
            //   $sort: {
            //     createdAt: -1,
            //   },
            // },
            // ).limit(limit);
            return res.status(200).send({ message: "Successfully searched", authors });
        }
        catch (error) {
            res.status(500).send({
                error: error.message,
            });
            next(error);
        }
    });
}
exports.searchController = { searchBooks, searchAuthors };
//# sourceMappingURL=search-controller.js.map