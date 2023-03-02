import React from "react";
import Container from "@mui/material/Container";
import * as styles from "./publications.module.css";
import { PUBLICATIONS } from "../../data/publications";
import { Publication } from "../../components/publications/publication";
import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";

export const Publications = () => (
  <Container className={styles.publications}>
    <h1 className={styles.header}>Publications</h1>
    {PUBLICATIONS.map(publication => {
      return <Publication key={publication.name} publication={publication} />;
    })}
  </Container>
);

const PublicationsPage = () => (
  <Layout>
    <SEO title="Publications" />
    <Publications />
  </Layout>
);

export default PublicationsPage;
