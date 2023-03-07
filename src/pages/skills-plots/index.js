import React from "react";
import { Layout } from "../../components/Layout";
import { Seo } from "../../components/seo";
import { SkillsPlots } from "../../components/SkillsPlots/SkillsPlots";

const SkillsPlotsPage = () => (
  <Layout>
    <Seo title="Skill Plots" />
    <SkillsPlots />
  </Layout>
);

export default SkillsPlotsPage;
