import { Spacer } from 'components/Spacers/Spacer';
import { SoftwareProjects } from 'GithubProjects/FeaturedProjects/SoftwareProjects';

import { Skills } from './Skills';
import { Layout } from '../Layouts/Layout';
import { Presentations } from '../Presentations/Presentations';
import { Publications } from '../Publications/Publications';
import { SkillsPlotWithChooser } from '../SkillsPlots/SkillsPlotsWithChooser';

export function HomePage() {
  return (
    <Layout
      title="Home"
      description="Jaz Singh Engineering portfolio"
      sx={{
        paddingTop: 0,
      }}
    >
      <Skills />
      <Spacer height={2} />
      <SkillsPlotWithChooser />
      <Spacer height={2} />
      <SoftwareProjects />
      <Spacer height={2} />
      <Presentations />
      <Spacer height={2} />
      <Publications />
    </Layout>
  );
}
