import Box, { BoxProps } from '@mui/material/Box';
import { ReactNode } from 'react';

import { ISeoProps, Seo } from './Seo';

export interface ILayoutProps {
  title: string;
  description: string;
  sx?: BoxProps['sx'];
  seoProps?: Partial<ISeoProps>;
  children: ReactNode;
}

export function Layout(props: ILayoutProps) {
  const { title, description, sx, seoProps, children } = props;

  return (
    <>
      <Seo title={title} description={description} {...seoProps} />
      <Box sx={{ paddingY: 4, ...sx }}>{children}</Box>
    </>
  );
}

Layout.defaultProps = {
  sx: {},
  seoProps: {},
};
