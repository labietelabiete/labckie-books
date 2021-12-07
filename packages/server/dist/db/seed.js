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
exports.seedPurchase = exports.seedBooks = exports.seedAuthors = void 0;
const author_model_1 = require("../models/author-model");
const book_model_1 = require("../models/book-model");
const purchase_model_1 = require("../models/purchase-model");
const data_authors_1 = require("./data-authors");
const data_books_1 = require("./data-books");
const data_purchase_1 = require("./data-purchase");
function seedAuthors() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = (0, data_authors_1.getSeedAuthors)();
        yield author_model_1.Author.deleteMany({});
        yield author_model_1.Author.create([...results]);
        console.log("Authors seeding finished");
    });
}
exports.seedAuthors = seedAuthors;
function seedBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield (0, data_books_1.getSeedBooks)();
        yield book_model_1.Book.deleteMany({});
        yield book_model_1.Book.create([...results]);
        console.log("Books seeding finished");
    });
}
exports.seedBooks = seedBooks;
function seedPurchase() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield (0, data_purchase_1.getSeedPurchase)();
        yield purchase_model_1.Purchase.create([...results]);
        console.log("Purchases seeding finished");
    });
}
exports.seedPurchase = seedPurchase;
//# sourceMappingURL=seed.js.map