import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./software-projects.module.css";
import { GithubProject } from "../../components/projects/github-project";
import { Link } from "../../components/link";
import CircularProgress from "@mui/material/CircularProgress";

export const AllGithubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let isCurrentRequest = true;
    const getProjects = async () => {
      setProjects([]);
      setStatus("");
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/jazeee/repos?sort=updated&page=${page}`
        );
        if (response.ok) {
          const githubData = await response.json();
          if (isCurrentRequest) {
            const projects = githubData.map(datum => {
              const { name, description, full_name, html_url } = datum;
              return {
                name,
                description: description || "-",
                url: html_url,
                githubFullName: full_name,
              };
            });
            setProjects(projects);
            setIsLoading(false);
          }
        } else {
          throw new Error(`${response.status} - Bad response.`);
        }
      } catch (error) {
        setStatus(`Error retrieving data: ${error}`);
        console.log(error);
        setIsLoading(false);
      }
    };
    getProjects();
    return () => (isCurrentRequest = false);
  }, [setProjects, setIsLoading, page, setStatus]);
  return (
    <Container className={styles.projects}>
      <h1 className={styles.header}>All Github Projects</h1>
      {isLoading && <CircularProgress />}
      {status && <Typography variant="h4">{status}</Typography>}
      {projects.map(project => {
        return <GithubProject key={project.name} project={project} />;
      })}
      <Container className={styles.actions}>
        <Button
          variant="contained"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          Previous Page
        </Button>
        <Button
          variant="contained"
          disabled={projects.length !== 30}
          onClick={() => setPage(page + 1)}
        >
          Next Page
        </Button>
        <Button>
          <Link to="/software-projects">Featured Projects</Link>
        </Button>
      </Container>
    </Container>
  );
};

const AllGithubProjectsPage = () => (
  <Layout>
    <SEO title="All Github Projects" />
    <AllGithubProjects />
  </Layout>
);

export default AllGithubProjectsPage;
