import React from 'react';

import { Layout } from '../../components/Layout';
import { AllGithubProjects } from '../../components/Projects/AllGithubProjects';
import { Seo } from '../../components/Seo';

function AllGithubProjectsPage() {
  return (
    <Layout>
      <Seo title="All Github Projects" />
      <AllGithubProjects />
    </Layout>
  );
}

export default AllGithubProjectsPage;
