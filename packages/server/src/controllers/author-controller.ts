import db from "../models";
import { Request, Response, NextFunction } from "express";
import { Author, Book } from "./../utils/types";

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    // const { page = 0, limit = 8 } = req.query;

    // const { page = 0 }: number = parseInt(req.query.page);
    // const { limit = 6 }: number = parseInt(req.query.page);

    const authors: Author[] = await db.Author.aggregate([
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
      // { $limit: limit },
      // { $skip: page * limit },
    ]);

    res.status(200).send({ authors });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id: authorId } = req.params;

    const author: Author = await db.Author.findOne(
      { _id: authorId },
      {
        firstName: 1,
        lastName: 1,
        country: 1,
        birthYear: 1,
        bio: 1,
        picture: 1,
      },
    ).lean();

    const books: Book[] = await db.Book.find(
      { authorId: authorId },
      {
        title: 1,
        caption: 1,
        images: 1,
        colors: 1,
        price: 1,
      },
    );

    author.books = books;

    res.status(200).send({ author });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

export const authorController = { getAll, getById };
