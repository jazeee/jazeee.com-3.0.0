import React from "react";
import styles from "./publication.module.css";
import Typography from "@mui/material/Typography";
import { TargetBlankLink } from "../target-blank-link";

export const Publication = props => {
  const { publication } = props;
  return (
    <div className={styles.publication}>
      <div>
        <Typography variant="h6" className={styles.title}>
          <TargetBlankLink color="secondary" href={publication.url}>
            {publication.name}
          </TargetBlankLink>
        </Typography>
        <Typography variant="subtitle1" className={styles.caption}>
          {publication.authors}
        </Typography>
      </div>
      <div>
        <Typography variant="caption" className={styles.caption}>
          {publication.media} - ({publication.date})
        </Typography>
      </div>
    </div>
  );
};
