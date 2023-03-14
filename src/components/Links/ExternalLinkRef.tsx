import { LinkProps } from '@mui/material/Link';
import { forwardRef } from 'react';

import { ExternalLink } from './ExternalLink';

export const ExternalLinkRef: React.FC<LinkProps> = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <ExternalLink ref={ref} color="secondary" {...otherProps}>
        {children}
      </ExternalLink>
    );
  }
);
