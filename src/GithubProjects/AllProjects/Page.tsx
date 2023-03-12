import { AllGithubProjects } from './AllGithubProjects';
import { Layout } from '../../Layouts/Layout';

export function AllGithubProjectsPage() {
  return (
    <Layout title="All Github Projects" description="A page of projects from the Github API">
      <AllGithubProjects />
    </Layout>
  );
}
