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
  others?: [string];
}

export interface Book {
  _id: string;
  title: string;
  caption?: string;
  sinopsis?: [string];
  designer?: string;
  translator?: string;
  price: number;
  stock: number;
  authorId: Schema.Types.ObjectId;
  techData: TechData;
  images: Images;
  colors: [string];
}
