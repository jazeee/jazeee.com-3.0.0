import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { Skills } from '../components/Skills/Skills';

function SkillsPage() {
  return (
    <Layout>
      <Seo title="Skills" />
      <Skills />
    </Layout>
  );
}

export default SkillsPage;
