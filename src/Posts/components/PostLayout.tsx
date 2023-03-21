import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

import { InternalLink } from 'components/Links';
import { Spacer } from 'components/Spacers/Spacer';
import { ILayoutProps, Layout } from 'Layouts/Layout';

interface Props {
  layoutProps: Omit<ILayoutProps, 'children'>;
  breadcrumbName: string;
  headlineProps: {
    title: ReactNode;
    subtitle?: ReactNode;
    date: string;
  };
  children: ReactNode;
}

export function PostLayout(props: Props) {
  const { layoutProps, breadcrumbName, headlineProps, children } = props;
  return (
    <Layout {...layoutProps}>
      <Container maxWidth="md">
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <InternalLink underline="hover" to="/posts">
            Articles
          </InternalLink>
          <Typography color="text.primary">{breadcrumbName}</Typography>
        </Breadcrumbs>
        <Box
          margin={{
            xs: 0,
            sm: 4,
          }}
        >
          <Typography variant="h1">{headlineProps.title}</Typography>
          {headlineProps.subtitle && (
            <Typography variant="subtitle1" component="p">
              {headlineProps.subtitle}
            </Typography>
          )}
          <Typography variant="subtitle1" component="p">
            {headlineProps.date}
          </Typography>
          <Spacer height={1} />
          <Divider />
          <Spacer height={2} />
          {children}
        </Box>
      </Container>
    </Layout>
  );
}
