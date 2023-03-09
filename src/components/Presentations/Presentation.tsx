import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ExternalLink } from "../ExternalLink";
import { IPresentation } from "data/presentations";

interface Props {
  presentation: IPresentation;
}

export const PresentationDetails = (props: Props) => {
  const { presentation } = props;
  const { name, location, date, image, links } = presentation;
  return (
    <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <ExternalLink href={links[0].url}>
        <CardMedia title={name} image={image} sx={{
          height: 256,
          backgroundSize: 'contain',
          backgroundColor: 'black',
        }}/>
      </ExternalLink>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {location} on {date}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <CardActions>
        {links.map((link) => {
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
