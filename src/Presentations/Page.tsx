import { Presentations } from './Presentations';
import { Layout } from '../Layouts/Layout';

export function PresentationsPage() {
  return (
    <Layout title="Presentations" description="List of presentations">
      <Presentations />
    </Layout>
  );
}
