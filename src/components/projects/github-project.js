import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ExternalLink } from "../ExternalLink";
import { GithubIcon } from "../icons/github-icon";

export const GithubProject = props => {
  const { project } = props;
  const { url, name, description, githubFullName } = project;
  return (
    <Box display="flex" justifyContent="space-between" sx={{
      borderBottom: `1px solid #e6e6e6`,
    }}>
      <Typography>
        <ExternalLink color="secondary" href={url}>
          {name}
        </ExternalLink>
        {description && ` - ${description}`}
      </Typography>
      <Typography sx={{
        flex: 1,
        textAlign: 'right',
      }}>
        <ExternalLink
          color="secondary"
          href={`https://github.com/${githubFullName}`}
        >
          <GithubIcon sx={{
            fontSize: '1rem',
            color: 'grey',
            verticalAlign: 'middle',
            marginRight: 0.5,
          }} />
          Github
        </ExternalLink>
      </Typography>
    </Box>
  );
};
