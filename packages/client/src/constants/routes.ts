const { REACT_APP_API_ROUTE } = process.env;

export const PUBLIC = {
  HOME: "/",
  BOOK: "/book",
  AUTHOR: "/author",
  SUMMARY: "/cart-summary",
  DELIVERY: "/checkout/devivery",
  PAYMENT: "/checkout/paymennt",
  CONFIRMATION: "/checkout/confirmation",
};

export const API = {
  MAIN: REACT_APP_API_ROUTE,
  BOOK: "/books",
  AUTHOR: "/authors",
  PURCHASE: "/purchase",
};
