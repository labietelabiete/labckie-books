const { REACT_APP_API_ROUTE } = process.env;

export const PUBLIC = {
  HOME: "/",
  BOOK: "/book",
  AUTHOR: "/author",
};

export const API = {
  MAIN: REACT_APP_API_ROUTE,
  BOOK: "/books",
  AUTHOR: "/authors",
};
