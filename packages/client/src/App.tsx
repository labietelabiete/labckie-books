import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PUBLIC } from "./constants/routes";

import Home from "./pages/Home";
import Book from "./pages/Book";
import Author from "./pages/Author";
import Summary from "./pages/Summary";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";

import "./App.css";

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${PUBLIC.AUTHOR}/:id`} element={<Author />} />
        <Route path={`${PUBLIC.BOOK}/:id`} element={<Book />} />
        <Route path={PUBLIC.DELIVERY} element={<Delivery />} />
        <Route path={PUBLIC.CONFIRMATION} element={<Confirmation />} />
        <Route path={PUBLIC.SUMMARY} element={<Summary />} />
        <Route path={PUBLIC.PAYMENT} element={<Payment />} />
        <Route path={PUBLIC.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
