import Box from '@mui/material/Box';

import { Seo } from './Seo';

interface Props {
  title: string;
  description: string;
}

export function Layout(props: React.PropsWithChildren<Props>) {
  const { title, description, children } = props;

  return (
    <>
      <Seo title={title} description={description} />
      <Box component="main" sx={{ paddingY: 4 }}>
        {children}
      </Box>
    </>
  );
}
