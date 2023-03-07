import React from "react";
import { Layout } from "../../components/layout";
import { AllGithubProjects } from "../../components/projects/AllGithubProjects";
import { Seo } from "../../components/seo";

const AllGithubProjectsPage = () => (
  <Layout>
    <Seo title="All Github Projects" />
    <AllGithubProjects />
  </Layout>
);

export default AllGithubProjectsPage;
