import React from "react";
import * as styles from "./presentation-details.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ExternalLink } from "../ExternalLink";

export const PresentationDetails = props => {
  const { presentation } = props;
  const { name, location, date, image, links } = presentation;
  return (
    <Card className={styles.presentation}>
      <ExternalLink href={links[0].url}>
        <CardMedia className={styles.media} title={name} image={image} />
      </ExternalLink>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {location} on {date}
        </Typography>
      </CardContent>
      <CardActions>
        {links.map(link => {
          const { name, url } = link;
          return (
            <Button key={url} size="small">
              <ExternalLink color="secondary" href={url}>
                {name}
              </ExternalLink>
            </Button>
          );
        })}
      </CardActions>
    </Card>
  );
};
