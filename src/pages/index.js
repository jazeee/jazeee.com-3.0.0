import React from "react"

import { Layout } from "../components/Layout"
import { Skills } from "../components/Skills/Skills";
import { Presentations } from "../components/Presentations/Presentations";
import { SoftwareProjects } from "../components/Projects/SoftwareProjects";
import { SkillsPlotWithChooser } from "../components/SkillsPlots/SkillsPlotsWithChooser";
import { Publications } from "../components/Publications/Publications";

import { Seo } from "../components/Seo"

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
