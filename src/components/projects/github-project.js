import React from "react";
import styles from "./github-project.module.css";
import Typography from "@mui/material/Typography";
import { TargetBlankLink } from "../target-blank-link";
import { GithubIcon } from "../icons/github-icon";

export const GithubProject = props => {
  const { project } = props;
  return (
    <div className={styles.project}>
      <Typography className={styles.summary}>
        <TargetBlankLink color="secondary" href={project.url}>
          {project.name}
        </TargetBlankLink>{" "}
        - {project.description}
      </Typography>
      <Typography className={styles.codeLink}>
        <TargetBlankLink
          color="secondary"
          href={`https://github.com/${project.githubFullName}`}
        >
          <GithubIcon className={styles.GithubIcon} />
          Github
        </TargetBlankLink>
      </Typography>
    </div>
  );
};
