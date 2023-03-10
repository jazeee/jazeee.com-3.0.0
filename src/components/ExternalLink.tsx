import Link, { LinkProps } from '@mui/material/Link';
import React from 'react';

export function ExternalLink(props: LinkProps) {
  const { children, ...otherProps } = props;
  return (
    <Link color="secondary" {...otherProps} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
