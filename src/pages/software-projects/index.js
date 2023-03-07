import React from "react";
import { Layout } from "../../components/Layout";
import { SoftwareProjects } from "../../components/Projects/SoftwareProjects";
import { Seo } from "../../components/Seo";

const SoftwareProjectsPage = () => (
  <Layout>
    <Seo title="Software Projects" />
    <SoftwareProjects />
  </Layout>
);

export default SoftwareProjectsPage;
