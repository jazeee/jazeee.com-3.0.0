import { forwardRef } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

// Using forwardRef to allow third party components access to inner component
// https://reactjs.org/docs/forwarding-refs.html
export const BaseLink: React.FC<RouterLinkProps> = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  function ForwardRefRouterLink(props, ref) {
    return (
      <RouterLink ref={ref} {...props}>
        {props.children}
      </RouterLink>
    );
  }
);
