import db from "../models";
import { Request, Response, NextFunction } from "express";
import { Book, Author } from "./../utils/types";

async function searchBooks(req: Request, res: Response, next: NextFunction) {
  try {
    const searchText = req.query?.q;
    const { limit = 8 } = req.query;

    const books: Book[] = await db.Book.find(
      {
        $or: [
          { title: { $regex: searchText, $options: "i" } },
          { caption: { $regex: searchText, $options: "i" } },
        ],
      },
      {
        title: 1,
        caption: 1,
        price: 1,
        stock: 1,
        authorId: 1,
        createdAt: 1,
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ).limit(limit);

    return res.status(200).send({ message: "Successfully searched", books });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function searchAuthors(req: Request, res: Response, next: NextFunction) {
  try {
    const searchText = req.query?.q;
    const { limit = 8 } = req.query;

    const authors: Author[] = await db.Author.find(
      {
        $or: [
          { title: { $regex: searchText, $options: "i" } },
          { caption: { $regex: searchText, $options: "i" } },
        ],
      },
      {
        firstName: 1,
        lastName: 1,
        picture: 1,
        createdAt: 1,
      },
    );
    // {
    //   $sort: {
    //     createdAt: -1,
    //   },
    // },
    // ).limit(limit);

    return res.status(200).send({ message: "Successfully searched", authors });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

export const searchController = { searchBooks, searchAuthors };
