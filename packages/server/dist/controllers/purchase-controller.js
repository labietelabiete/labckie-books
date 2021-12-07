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
exports.purchaseController = void 0;
const models_1 = __importDefault(require("../models"));
// import { Purchase } from "./../utils/types";
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { purchaseObject } = req.body;
            yield models_1.default.Purchase.create({ purchaseObject });
            res.status(200).send({ message: "Purchase created succesfully!" });
        }
        catch (error) {
            res.status(500).send({
                message: "Error creating purchase",
                error: error.message,
            });
        }
    });
}
exports.purchaseController = { create };
//# sourceMappingURL=purchase-controller.js.map