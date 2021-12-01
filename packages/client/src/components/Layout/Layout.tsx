import React from "react";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

import { LayoutProps } from "../../utils/types";

export default function Layout({
  docTitle,
  children,
}: LayoutProps): React.ReactElement {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
