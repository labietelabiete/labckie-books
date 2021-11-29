import { Author } from "../models/author-model";
import { Book } from "../models/book-model";

import { getSeedAuthors } from "./data-authors";
import { getSeedBooks } from "./data-books";

export async function seedAuthors() {
  const results = getSeedAuthors();

  await Author.deleteMany({});
  await Author.create([...results]);
  console.log("Authors seeding finished");
}

export async function seedBooks() {
  const results = await getSeedBooks();

  await Book.deleteMany({});
  await Book.create([...results]);

  console.log("Books seeding finished");
}
