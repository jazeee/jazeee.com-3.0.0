import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Skills } from "./skills";
import { SkillsPlotWithChooser } from "./skills-plots";
import { SoftwareProjects } from "./software-projects";
import { Presentations } from "./presentations";
import { Publications } from "./publications";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Skills />
    <SkillsPlotWithChooser />
    <SoftwareProjects />
    <Presentations />
    <Publications />
  </Layout>
);

export default IndexPage;
