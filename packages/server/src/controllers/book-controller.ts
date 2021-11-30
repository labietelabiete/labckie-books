import db from "../models";
import { Request, Response, NextFunction } from "express";

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    // const { page = 0, limit = 8 } = req.query;

    const books = await db.Book.aggregate([
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

    await db.Book.populate(books, {
      path: "authorId",
      option: { select: "firstName lastName" },
    });

    res.status(200).send({ books });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id: bookId } = req.params;

    const book = await db.Book.findOne(
      { _id: bookId },
      {
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
      },
    )
      .populate({
        path: "authorId",
        options: { select: "firstName lastName" },
      })
      .lean();

    res.status(200).send({ book });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

export const bookController = { getAll, getById };
