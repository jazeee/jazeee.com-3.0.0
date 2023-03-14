import Link, { LinkProps } from '@mui/material/Link';

import { OpenInNewTabIcon } from 'components/Icons/OpenInNewTabIcon';

interface Props extends LinkProps {
  openInNewTabIsVisible?: boolean;
}

export function ExternalLink(props: Props) {
  const { children, openInNewTabIsVisible, ...otherProps } = props;
  return (
    <Link color="secondary" {...otherProps} target="_blank" rel="noopener">
      {children}
      {openInNewTabIsVisible && (
        <OpenInNewTabIcon sx={{ marginLeft: 0.5, verticalAlign: 'middle' }} />
      )}
    </Link>
  );
}

ExternalLink.defaultProps = {
  openInNewTabIsVisible: true,
};
