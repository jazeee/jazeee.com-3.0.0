import React from "react";
import { Presentations } from "../components/Presentations/Presentations";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";

const PresentationsPage = () => (
  <Layout>
    <Seo title="Presentations" />
    <Presentations />
  </Layout>
);

export default PresentationsPage;
