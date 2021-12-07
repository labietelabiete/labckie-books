"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
const mongoose_1 = require("mongoose");
const bookPurchaseSchema = new mongoose_1.Schema({
    n: { type: Number },
    _id: { type: mongoose_1.Schema.Types.ObjectId || String },
    title: { type: String },
});
const purchaseSchema = new mongoose_1.Schema({
    totalPrice: {
        type: Number,
        required: [true, "Total price is required"],
    },
    totalBooks: {
        type: Number,
        trim: true,
        required: [true, "Total books is required"],
    },
    delivery: {
        name: {
            type: String,
            trim: true,
            required: [true, "Name is required"],
        },
        lastName: {
            type: String,
            trim: true,
            required: [true, "Last name is required"],
        },
        email: {
            type: String,
            trim: true,
            required: [true, "Email is required"],
        },
        direction: {
            type: String,
            trim: true,
            required: [true, "Direction is required"],
        },
        city: {
            type: String,
            trim: true,
            required: [true, "City is required"],
        },
        cp: {
            type: String,
            trim: true,
            required: [true, "CP is required"],
        },
        phone: {
            type: String,
            trim: true,
            required: [true, "Phone is required"],
        },
        deliveryDate: {
            type: String,
            trim: true,
            required: [true, "Delivery date is required"],
        },
    },
    payment: {
        cvc: {
            type: String,
            trim: true,
            required: [true, "CVC is required"],
        },
        expiry: {
            type: String,
            trim: true,
            required: [true, "Expiry date is required"],
        },
        name: {
            type: String,
            trim: true,
            required: [true, "Card holder is required"],
        },
        number: {
            type: String,
            trim: true,
            required: [true, "Card number is required"],
        },
    },
    books: {
        type: [bookPurchaseSchema],
    },
});
const Purchase = (0, mongoose_1.model)("purchase", purchaseSchema);
exports.Purchase = Purchase;
//# sourceMappingURL=purchase-model.js.map