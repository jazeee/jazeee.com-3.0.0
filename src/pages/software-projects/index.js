import React from "react";
import { Layout } from "../../components/Layout";
import { SoftwareProjects } from "../../components/projects/SoftwareProjects";
import { Seo } from "../../components/seo";

const SoftwareProjectsPage = () => (
  <Layout>
    <Seo title="Software Projects" />
    <SoftwareProjects />
  </Layout>
);

export default SoftwareProjectsPage;
