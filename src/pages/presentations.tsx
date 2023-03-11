import { Layout } from '../components/Layout';
import { Presentations } from '../components/Presentations/Presentations';
import { Seo } from '../components/Seo';

function PresentationsPage() {
  return (
    <Layout>
      <Seo title="Presentations" />
      <Presentations />
    </Layout>
  );
}

export default PresentationsPage;
