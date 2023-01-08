import React from "react";
import AppLink from "../Common/AppLink";

const AppHeader = () => {
  return (
    <div>
      <AppLink href={"/"}>Home</AppLink>
      <AppLink href={"/about"}>About</AppLink>
    </div>
  );
};

export default AppHeader;
