import React from "react";
import * as styles from "./github-project.module.css";
import Typography from "@mui/material/Typography";
import { ExternalLink } from "../ExternalLink";
import { GithubIcon } from "../icons/github-icon";

export const GithubProject = props => {
  const { project } = props;
  return (
    <div className={styles.project}>
      <Typography className={styles.summary}>
        <ExternalLink color="secondary" href={project.url}>
          {project.name}
        </ExternalLink>{" "}
        - {project.description}
      </Typography>
      <Typography className={styles.codeLink}>
        <ExternalLink
          color="secondary"
          href={`https://github.com/${project.githubFullName}`}
        >
          <GithubIcon className={styles.GithubIcon} />
          Github
        </ExternalLink>
      </Typography>
    </div>
  );
};
