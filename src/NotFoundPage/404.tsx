import Typography from '@mui/material/Typography';

import { Layout } from '../Layouts/Layout';

function NotFoundPage() {
  return (
    <Layout title="404: Not found" description="An invalid route">
      <Typography variant="h1" paragraph>
        NOT FOUND
      </Typography>
      <Typography>You just hit a route that doesn&#39;t exist... the sadness.</Typography>
    </Layout>
  );
}

export default NotFoundPage;
