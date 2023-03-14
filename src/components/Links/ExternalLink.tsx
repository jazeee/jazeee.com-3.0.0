import Link, { LinkProps } from '@mui/material/Link';
import { forwardRef } from 'react';

import { OpenInNewTabIcon } from 'components/Icons/OpenInNewTabIcon';

interface ExternalLinkProps extends Omit<LinkProps, 'href'> {
  openInNewTabIsVisible?: boolean;
  to: string;
}

export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  function ForwardRefExternalLink(props, ref) {
    const { children, openInNewTabIsVisible, to, ...otherProps } = props;
    return (
      <Link ref={ref} color="secondary" {...otherProps} href={to} target="_blank" rel="noopener">
        {children}
        {openInNewTabIsVisible && (
          <OpenInNewTabIcon sx={{ marginLeft: 0.5, verticalAlign: 'middle' }} />
        )}
      </Link>
    );
  }
);

ExternalLink.defaultProps = {
  openInNewTabIsVisible: true,
};
