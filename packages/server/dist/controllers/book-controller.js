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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const db = require("../models");
function getAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const { page = 0, limit = 8 } = req.query;
            const books = yield db.Book.aggregate([
                {
                    $project: {
                        title: 1,
                        caption: 1,
                        price: 1,
                        stock: 1,
                        authorId: 1,
                        createdAt: 1,
                    },
                },
                {
                    $sort: {
                        createdAt: -1,
                    },
                },
                // { $limit: limit },
                // { $skip: page * limit },
            ]);
            yield db.Book.populate(books, {
                path: "authorId",
                option: { select: "firstName lastName" },
            });
            res.status(200).send({ books });
        }
        catch (error) {
            res.status(500).send({
                error: error.message,
            });
            next(error);
        }
    });
}
function getById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id: bookId } = req.params;
            const book = yield db.Book.findOne({ _id: bookId }, {
                title: 1,
                caption: 1,
                sinopsis: 1,
                designer: 1,
                translator: 1,
                price: 1,
                stock: 1,
                authorId: 1,
                techData: 1,
                images: 1,
            })
                .populate({
                path: "authorId",
                options: { select: "firstName lastName" },
            })
                .lean();
            res.status(200).send({ data: book });
        }
        catch (error) {
            res.status(500).send({
                error: error.message,
            });
            next(error);
        }
    });
}
exports.bookController = { getAll, getById };
//# sourceMappingURL=book-controller.js.map