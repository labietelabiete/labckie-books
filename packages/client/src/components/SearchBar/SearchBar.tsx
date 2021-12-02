import React from "react";

import { useFormik } from "formik";

import searchBarSchema from "./search-schema";

import { ImSearch } from "react-icons/im";

export default function SearchBar(): React.ReactElement {
  const formik = useFormik({
    initialValues: {
      searchBar: "",
    },
    validationSchema: searchBarSchema,
    onSubmit: (formikState) => {
      if (formikState.searchBar !== "") {
        // history.push(`${PUBLIC.SEARCH}?q=${formikState.searchBar}`);
        // history.go(0);
        console.log(formikState.searchBar);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="flex">
        <input
          type="text"
          className="bg-black p-3 w-80 rounded-xl border-2 border-white text-white shadow-2xl"
          id="searchBar"
          name="searchBar"
          placeholder="Search for books, authors..."
          value={formik.values.searchBar}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/* <button
          className="bg-black py-3 px-4 rounded-xl border-2 border-white text-white text-xl"
          type="submit"
        > */}
        <button
          className="py-4 px-2 text-white text-xl absolute right-1"
          type="submit"
        >
          <ImSearch className="" />
        </button>
      </form>
    </div>
  );
}
