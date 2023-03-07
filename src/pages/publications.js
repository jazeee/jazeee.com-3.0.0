import React from "react";
import { Publications } from "../components/Publications/Publications";
import { Layout } from "../components/Layout";
import { Seo } from "../components/seo";

const PublicationsPage = () => (
  <Layout>
    <Seo title="Publications" />
    <Publications />
  </Layout>
);

export default PublicationsPage;
