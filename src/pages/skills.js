import React from "react";
import { Layout } from "../components/Layout";
import { Seo } from "../components/seo";
import { Skills } from "../components/skills/Skills";

const SkillsPage = () => (
  <Layout>
    <Seo title="Skills" />
    <Skills />
  </Layout>
);

export default SkillsPage;
