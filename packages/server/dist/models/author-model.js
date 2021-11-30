"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
// const mongoose = require("mongoose");
// const { Schema } = require("mongoose");
const mongoose_1 = require("mongoose");
// import { validator } from "validator";
const validator = require("validator");
const authorSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, "First name is required"],
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Last name is required"],
    },
    country: {
        type: String,
        trim: true,
        required: [true, "Country is required"],
    },
    birthYear: {
        type: Number,
        required: [true, "Birth year is required"],
    },
    bio: {
        type: [String],
        trim: true,
        required: [true, "Biography is required"],
    },
    picture: {
        type: String,
        trim: true,
        required: [true, "Picture url is required"],
        validate: {
            validator: (value) => validator.isURL(value),
            message: () => `URL is not valid`,
        },
    },
}, {
    strict: false,
    timestamps: true,
});
const Author = (0, mongoose_1.model)("author", authorSchema);
exports.Author = Author;
//# sourceMappingURL=author-model.js.map