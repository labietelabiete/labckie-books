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
exports.bookController = void 0;
const models_1 = __importDefault(require("../models"));
function getAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const { page = 0, limit = 8 } = req.query;
            const books = yield models_1.default.Book.aggregate([
                {
                    $project: {
                        title: 1,
                        caption: 1,
                        price: 1,
                        authorId: 1,
                        createdAt: 1,
                        images: 1,
                        colors: 1,
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
            yield models_1.default.Book.populate(books, {
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
            const book = yield models_1.default.Book.findOne({ _id: bookId }, {
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
                colors: 1,
            })
                .populate({
                path: "authorId",
                options: { select: "firstName lastName" },
            })
                .lean();
            res.status(200).send({ book });
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