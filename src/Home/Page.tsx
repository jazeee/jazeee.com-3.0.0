import { Spacer } from 'src/components/Spacers/Spacer';
import { SoftwareProjects } from 'src/GithubProjects/FeaturedProjects/SoftwareProjects';
import { ContributionMetrics2019AndOnContainer } from 'src/Posts/ColorHealth2019/Container';
import { SkillsPlotsImageContainer } from 'src/SkillsPlots/ImageContainer';

import { Skills } from './Skills';
import { Layout } from '../Layouts/Layout';
import { Presentations } from '../Presentations/Presentations';
import { Publications } from '../Publications/Publications';

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
      <SkillsPlotsImageContainer />
      <Spacer height={2} />
      <ContributionMetrics2019AndOnContainer />
      <Spacer height={2} />
      <SoftwareProjects />
      <Spacer height={2} />
      <Presentations />
      <Spacer height={2} />
      <Publications />
    </Layout>
  );
}
