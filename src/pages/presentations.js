import React from "react";
import { Presentations } from "../components/presentations/Presentations";
import { Layout } from "../components/Layout";
import { Seo } from "../components/seo";

const PresentationsPage = () => (
  <Layout>
    <Seo title="Presentations" />
    <Presentations />
  </Layout>
);

export default PresentationsPage;
