import React from "react"

import { Layout } from "../components/layout"
import { Skills } from "../components/skills/Skills";
import { Presentations } from "../components/presentations/Presentations";
import { SoftwareProjects } from "../components/projects/SoftwareProjects";
import { SkillsPlotWithChooser } from "../components/SkillsPlots/SkillsPlotsWithChooser";
import { Publications } from "../components/publications/Publications";

import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Skills />
    <SkillsPlotWithChooser />
    <SoftwareProjects />
    <Presentations />
    <Publications />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
