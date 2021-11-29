const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const validator = require("validator");

const bookSchema = new Schema(
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
      type: Number,
      required: [true, "Price is required"],
    },
    stock: {
      type: Number,
      required: [true, "Stock is required"],
    },

    authorId: {
      type: mongoose.Schema.Types.ObjectId,
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

const Book = mongoose.model("book", bookSchema);

export { Book };
