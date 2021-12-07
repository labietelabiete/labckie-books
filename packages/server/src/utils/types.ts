import { Schema } from "mongoose";

export interface Author {
  _id: string;
  firstName: string;
  lastName: string;
  country: string;
  birthYear: number;
  bio: [string];
  picture: string;
  books?: any;
}

interface TechData {
  releaseYear?: number;
  pagesNumber?: number;
  size?: string;
  binding?: string;
  ISBN?: string;
}

interface Images {
  main: string;
  others?: string[];
}

export interface Book {
  _id: string;
  title: string;
  caption: string;
  sinopsis: string[];
  designer: string;
  translator: string;
  price: string;
  stock: number;
  authorId: Schema.Types.ObjectId;
  techData: TechData;
  images: Images;
  colors: string[];
}

export interface Delivery {
  name: string;
  lastName: string;
  email: string;
  direction: string;
  city: string;
  cp: string;
  phone: string;
  deliveryDate: string;
}

export interface Payment {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
}

export interface BookPurchase {
  n: number;
  _id: string | any;
  title: string | any;
}

export interface Purchase {
  delivery: Delivery;
  payment: Payment;
  books: BookPurchase[];
  totalPrice: number;
  totalBooks: number;
}
