import { Schema, model } from "mongoose";
const validator = require("validator");
import { Book } from "./../utils/types";

const bookSchema = new Schema<Book>(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
    },
    caption: {
      type: String,
      trim: true,
    },
    sinopsis: {
      type: [String],
      trim: true,
    },
    designer: {
      type: String,
      trim: true,
    },

    translator: {
      type: String,
      trim: true,
    },

    price: {
      type: String,
      required: [true, "Price is required"],
    },
    stock: {
      type: Number,
      required: [true, "Stock is required"],
    },

    authorId: {
      type: Schema.Types.ObjectId,
      ref: "author",
      required: [true, "Author Id is required"],
    },
    techData: {
      releaseYear: {
        type: Number,
      },
      pagesNumber: {
        type: Number,
      },
      size: {
        type: String,
      },
      binding: {
        type: String,
      },
      ISBN: {
        type: String,
      },
    },
    images: {
      main: {
        type: String,
        trim: true,
        required: [true, "Picture url is required"],
        validate: {
          validator: (value) => validator.isURL(value),
          message: () => `URL is not valid`,
        },
      },
      others: { type: [String] },
    },
    colors: { type: [String] },
  },
  {
    timestamps: true,
  },
);

const Book = model<Book>("book", bookSchema);

export { Book };
