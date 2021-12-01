import React from "react";

// Components
export interface OnlyChildren {
  children: React.ReactChild | React.ReactChild[];
}

export interface LayoutProps extends OnlyChildren {
  docTitle: string;
}

// Redux
export interface ReduxState {
  isLight: boolean;
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
  others?: string[];
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
  price: number;
  images: Images;
  colors: string[];
  authorId: BookAuthor;
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
  authorId: BookAuthor;
  techData: TechData;
  images: Images;
  colors: string[];
}
