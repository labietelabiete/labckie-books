import React from "react";

// Components
export interface OnlyChildren {
  children: React.ReactChild | React.ReactChild[];
}

export interface LayoutProps extends OnlyChildren {
  docTitle?: string;
}

export interface InputProps {
  id?: string;
  value?: string;
  type: string;
  label?: string;
  fullWidth?: boolean;
  placeholder?: string;
  handleChange?: any;
  handleBlur?: any;
  handleInput?: any;
  errorMessage?: string | any;
  hasErrorMessage?: boolean | any;
}

// Redux

export interface CartReduxState {
  n: number;
  _id: string | any;
  title: string | any;
  images: Images | any;
  author: string;
  authorId: string | any;
  price: number | any;
}

export interface PurchaseReduxState {
  name: string;
  lastName: string;
  email: string;
  direction: string;
  city: string;
  cp: string;
  phone: string;
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
