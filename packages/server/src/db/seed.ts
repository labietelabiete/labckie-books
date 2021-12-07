import { Author } from "../models/author-model";
import { Book } from "../models/book-model";
import { Purchase } from "../models/purchase-model";

import { getSeedAuthors } from "./data-authors";
import { getSeedBooks } from "./data-books";
import { getSeedPurchase } from "./data-purchase";

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

export async function seedPurchase() {
  const results = await getSeedPurchase();

  await Purchase.create([...results]);

  console.log("Purchases seeding finished");
}
