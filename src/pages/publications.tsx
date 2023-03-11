import { Layout } from '../components/Layout';
import { Publications } from '../components/Publications/Publications';
import { Seo } from '../components/Seo';

function PublicationsPage() {
  return (
    <Layout>
      <Seo title="Publications" />
      <Publications />
    </Layout>
  );
}

export default PublicationsPage;
