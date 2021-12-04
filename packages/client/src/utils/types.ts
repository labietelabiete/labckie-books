import React from "react";

// Components
export interface OnlyChildren {
  children: React.ReactChild | React.ReactChild[];
}

export interface LayoutProps extends OnlyChildren {
  docTitle?: string;
}

// Redux

export interface CartReduxState {
  n: number;
  _id: string;
  title: string;
  images: Images;
  author: string;
  authorId: string;
  price: number | any;
}
// Books objects

interface TechData {
  releaseYear?: number;
  pagesNumber?: number;
  size?: string;
  binding?: string;
  ISBN?: string;
}

interface Images {
  main: string;
  others: string[];
}

interface BookAuthor {
  _id: string;
  firstName: string;
  lastName: string;
  country: string;
  birthYear: number;
  bio: string[];
  picture: string;
  books?: any;
}

export interface BookCardProps {
  _id: string;
  title: string;
  caption?: string;
  price: string | any;
  images: Images;
  colors: string[];
  authorId: BookAuthor;
}

export interface BookProps {
  _id: string;
  title: string;
  caption: string;
  sinopsis: string[];
  designer: string;
  translator: string;
  price: string | any;
  stock: number;
  authorId: BookAuthor;
  techData: TechData;
  images: Images;
  colors: string[];
}

export interface AuthorProps {
  _id: string;
  bio: string[];
  firstName: string;
  lastName: string;
  country: string;
  birthYear: number;
  picture: string;
  books: BookCardProps[];
}
