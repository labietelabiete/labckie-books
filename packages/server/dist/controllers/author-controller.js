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
exports.authorController = void 0;
const models_1 = __importDefault(require("../models"));
function getAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const { page = 0, limit = 8 } = req.query;
            const authors = yield models_1.default.Author.aggregate([
                {
                    $project: {
                        firstName: 1,
                        lastName: 1,
                        picture: 1,
                        createdAt: 1,
                    },
                },
                {
                    $sort: {
                        createdAt: -1,
                    },
                },
                // { $limit: parseInt(limit) },
                // { $skip: parseInt(page) * parseInt(limit) },
            ]);
            res.status(200).send({ authors });
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
            const { id: authorId } = req.params;
            const author = yield models_1.default.Author.findOne({ _id: authorId }, {
                firstName: 1,
                lastName: 1,
                country: 1,
                birthYear: 1,
                bio: 1,
                picture: 1,
            }).lean();
            const books = yield models_1.default.Book.find({ authorId: authorId }, {
                title: 1,
                caption: 1,
                images: 1,
                colors: 1,
            });
            author.books = books;
            res.status(200).send({ author });
        }
        catch (error) {
            res.status(500).send({
                error: error.message,
            });
            next(error);
        }
    });
}
exports.authorController = { getAll, getById };
//# sourceMappingURL=author-controller.js.map