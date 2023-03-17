import Box, { BoxProps } from '@mui/material/Box';

import { ISeoProps, Seo } from './Seo';

interface Props {
  title: string;
  description: string;
  sx?: BoxProps['sx'];
  seoProps?: Partial<ISeoProps>;
}

export function Layout(props: React.PropsWithChildren<Props>) {
  const { title, description, sx, seoProps, children } = props;

  return (
    <>
      <Seo title={title} description={description} {...seoProps} />
      <Box sx={{ paddingY: 4, ...sx }}>{children}</Box>
    </>
  );
}
