import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { SkillsPlots } from '../components/SkillsPlots/SkillsPlots';

function SkillsPlotsPage() {
  return (
    <Layout>
      <Seo title="Skill Plots" />
      <SkillsPlots />
    </Layout>
  );
}

export default SkillsPlotsPage;
