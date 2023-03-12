import MuiLink, { LinkProps } from '@mui/material/Link';
import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { BaseLink } from './Link';

type TMuiLinkProps = Pick<LinkProps, 'underline' | 'sx' | 'color'>;
export interface IInternalLinkProps extends Omit<RouterLinkProps, 'color'>, TMuiLinkProps {}

export function InternalLink(props: IInternalLinkProps) {
  const { children } = props;
  return (
    <MuiLink component={BaseLink} {...props}>
      {children}
    </MuiLink>
  );
}
