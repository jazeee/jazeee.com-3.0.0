import React from 'react';

import { Layout } from '../components/Layout';
import { Presentations } from '../components/Presentations/Presentations';
import { SoftwareProjects } from '../components/Projects/SoftwareProjects';
import { Publications } from '../components/Publications/Publications';
import { Seo } from '../components/Seo';
import { Skills } from '../components/Skills/Skills';
import { SkillsPlotWithChooser } from '../components/SkillsPlots/SkillsPlotsWithChooser';

function IndexPage() {
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

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export function Head() {
  return <Seo title="Home" />;
}

export default IndexPage;
