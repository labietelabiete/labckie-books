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
  handleFocus?: any;
  handleInput?: any;
  errorMessage?: string | any;
  hasErrorMessage?: boolean | any;
}

// Credit cards interfaces

export interface CallbackArgument {
  issuer: string;
  maxLength: number;
}

export type Focused = "name" | "number" | "expiry" | "cvc";

export interface ReactCreditCardProps {
  acceptedCards?: ReadonlyArray<string> | undefined;
  callback?: ((type: CallbackArgument, isValid: boolean) => void) | undefined;
  cvc: string | number;
  expiry: string | number;
  focused?: Focused | undefined;
  issuer?: string | undefined;
  locale?: { valid: string } | undefined;
  name: string;
  number: string | number;
  placeholders?: { name: string } | undefined;
  preview?: boolean | undefined;
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

interface DeliveryState {
  name: string;
  lastName: string;
  email: string;
  direction: string;
  city: string;
  cp: string;
  phone: string;
}

interface PaymentState {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
}

export interface PurchaseReduxState {
  delivery: DeliveryState;
  payment: PaymentState;
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
