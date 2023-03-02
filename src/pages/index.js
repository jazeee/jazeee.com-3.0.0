import React from "react"

import { Layout } from "../components/layout"
import { Skills } from "./skills";
import { SkillsPlotWithChooser } from "./skills-plots";
import { SoftwareProjects } from "./software-projects";
import { Presentations } from "./presentations";
import { Publications } from "./publications";

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
