import React from "react";
import MuiLink from "@mui/material/Link";
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";

export const Link = React.forwardRef<any, GatsbyLinkProps<undefined>>(function Link(props, ref) {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

export const ForwardRefLink = React.forwardRef<any, GatsbyLinkProps<undefined>>((props, ref) => (
  <Link innerRef={ref} {...props} />
));
