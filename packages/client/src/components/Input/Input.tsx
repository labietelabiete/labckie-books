import React from "react";

import { InputProps } from "../../utils/types";

export default function Input({
  id = "input-01",
  value = "",
  type = "",
  label = "false",
  // classNames,
  // isNegative = false,
  fullWidth = false,
  placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  handleInput = () => {},
  errorMessage,
  hasErrorMessage,
  ...props
}: InputProps) {
  return (
    <div>
      {label ? (
        <label className="text-2xl font-bold font-oswald" htmlFor={id}>
          {label}
        </label>
      ) : (
        <label htmlFor={id}>&nbsp;</label>
      )}
      <div>
        <input
          type={type}
          className="mt-1 p-1 pl-3 w-full rounded-xl border-2 border-black"
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onInput={handleInput}
          {...props}
        />
      </div>
      <div className="">
        {hasErrorMessage && errorMessage ? (
          <p className="my-3 font-bold font-mulish text-salmonSecondary">{errorMessage}</p>
        ) : (
          <p className="">&nbsp;</p>
        )}
      </div>
    </div>
  );
}
