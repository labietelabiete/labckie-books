import db from "../models";
import { Request, Response, NextFunction } from "express";

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    // const { page = 0, limit = 8 } = req.query;

    const authors = await db.Author.aggregate([
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
      // { $limit: parseInt(limit) },
      // { $skip: parseInt(page) * parseInt(limit) },
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

    const author = await db.Author.findOne(
      { _id: authorId },
      {
        firstName: 1,
        lastName: 1,
        country: 1,
        birthYear: 1,
        bio: 1,
        picture: 1,
      },
    )
      .populate({
        path: "userId",
        options: { select: "firstName" },
      })
      .lean();

    const books = await db.Book.find(
      { album: authorId },
      {
        title: 1,
        caption: 1,
        sinopsis: 1,
        designer: 1,
        translator: 1,
        price: 1,
        stock: 1,
        techData: 1,
        images: 1,
      },
    );

    author.books = books;

    res.status(200).send({ data: author });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

export const authorController = { getAll, getById };
