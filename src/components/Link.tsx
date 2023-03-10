import MuiLink, { LinkProps } from '@mui/material/Link';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import React, { forwardRef } from 'react';

export const Link = forwardRef<LinkProps, GatsbyLinkProps<undefined>>(function GatsbyLinkRef(
  props,
  ref
) {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

export const ForwardRefLink = React.forwardRef<any, GatsbyLinkProps<undefined>>((props, ref) => (
  <Link innerRef={ref} {...props} />
));
