import { SoftwareProjects } from 'GithubProjects/FeaturedProjects/SoftwareProjects';

import { Skills } from './Skills';
import { Layout } from '../Layouts/Layout';
import { Presentations } from '../Presentations/Presentations';
import { Publications } from '../Publications/Publications';
import { SkillsPlotWithChooser } from '../SkillsPlots/SkillsPlotsWithChooser';

export function HomePage() {
  return (
    <Layout title="Home" description="Jaz Singh Engineering portfolio">
      <Skills />
      <SkillsPlotWithChooser />
      <SoftwareProjects />
      <Presentations />
      <Publications />
    </Layout>
  );
}
