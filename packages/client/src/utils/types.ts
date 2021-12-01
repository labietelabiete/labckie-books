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
