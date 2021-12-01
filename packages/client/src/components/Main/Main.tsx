import React from "react";

import { OnlyChildren } from "../../utils/types";

export default function Main({ children }: OnlyChildren): React.ReactElement {
  return <main>{children}</main>;
}
