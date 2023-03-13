import Box, { BoxProps } from '@mui/material/Box';

import { Seo } from './Seo';

interface Props {
  title: string;
  description: string;
  sx?: BoxProps['sx'];
}

export function Layout(props: React.PropsWithChildren<Props>) {
  const { title, description, sx, children } = props;

  return (
    <>
      <Seo title={title} description={description} />
      <Box sx={{ paddingY: 4, ...sx }}>{children}</Box>
    </>
  );
}
