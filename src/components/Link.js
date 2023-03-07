import React from "react";
import MuiLink from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";

export const Link = React.forwardRef(function Link(props, ref) {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

export const ForwardRefLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));
