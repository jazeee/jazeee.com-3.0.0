import React from "react";
import Link, { LinkProps } from "@mui/material/Link";

export const ExternalLink = (props: LinkProps) => {
  const { children, ...otherProps } = props;
  return (
    <Link
      color="secondary"
      {...otherProps}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};
