import { Layout } from '../components/Layout';
import { Presentations } from '../components/Presentations/Presentations';
import { SoftwareProjects } from '../components/Projects/SoftwareProjects';
import { Publications } from '../components/Publications/Publications';
import { Seo } from '../components/Seo';
import { Skills } from '../components/Skills/Skills';
import { SkillsPlotWithChooser } from '../components/SkillsPlots/SkillsPlotsWithChooser';

export function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Skills />
      <SkillsPlotWithChooser />
      <SoftwareProjects />
      <Presentations />
      <Publications />
    </Layout>
  );
}
