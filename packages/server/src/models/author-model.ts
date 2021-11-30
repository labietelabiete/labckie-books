// const mongoose = require("mongoose");
// const { Schema } = require("mongoose");
import { Schema, model } from "mongoose";
// import { validator } from "validator";
const validator = require("validator");

import { Author } from "./../utils/types";

const authorSchema = new Schema<Author>(
  {
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
  },
  {
    strict: false,
    timestamps: true,
  },
);

const Author = model<Author>("author", authorSchema);

export { Author };
