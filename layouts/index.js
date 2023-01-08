import React from "react";
import AppHeader from "../components/AppHeader";

const BaseLayout = ({ children, ...props }) => {
  return (
    <div>
      <AppHeader />
      <div>{children}</div>
    </div>
  );
};

export default BaseLayout;
