import Link from "next/link";
import React from "react";

const AppLink = ({ href, children, ...props }) => {
  return (
    <Link href={href} style={{ padding: "8px" }} {...props}>
      {children}
    </Link>
  );
};

export default AppLink;
