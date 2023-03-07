import React from "react";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { Skills } from "../components/Skills/Skills";

const SkillsPage = () => (
  <Layout>
    <Seo title="Skills" />
    <Skills />
  </Layout>
);

export default SkillsPage;
