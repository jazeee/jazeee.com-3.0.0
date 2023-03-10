import React from 'react';

import { Layout } from '../../components/Layout';
import { SoftwareProjects } from '../../components/Projects/SoftwareProjects';
import { Seo } from '../../components/Seo';

function SoftwareProjectsPage() {
  return (
    <Layout>
      <Seo title="Software Projects" />
      <SoftwareProjects />
    </Layout>
  );
}

export default SoftwareProjectsPage;
