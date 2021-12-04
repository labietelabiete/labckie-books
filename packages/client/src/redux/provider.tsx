import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

import { OnlyChildren } from "../utils/types";

const Provider = ({ children }: OnlyChildren) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export default Provider;
