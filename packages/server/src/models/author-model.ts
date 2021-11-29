const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const validator = require("validator");

const authorSchema = new Schema(
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
      default: 1992,
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

const Author = mongoose.model("author", authorSchema);

export { Author };
