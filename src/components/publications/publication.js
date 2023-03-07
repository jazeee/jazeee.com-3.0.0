import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ExternalLink } from "../ExternalLink";

export const Publication = props => {
  const { publication } = props;
  return (
    <Box sx={{
      '& + &': {
        borderTop: '1px solid #e6e6e6',
      },
    }}>
      <Typography variant="h6">
        <ExternalLink color="secondary" href={publication.url}>
          {publication.name}
        </ExternalLink>
      </Typography>
      <Typography variant="subtitle1">
        {publication.authors}
      </Typography>
      <Typography variant="caption">
        {publication.media} - ({publication.date})
      </Typography>
    </Box>
  );
};
