import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Spacer } from 'components/Spacers/Spacer';

import { IPresentation } from './data';
import { ExternalLink } from '../components/Links/ExternalLink';

interface Props {
  presentation: IPresentation;
}

export function PresentationDetails(props: Props) {
  const { presentation } = props;
  const { name, location, date, image, links } = presentation;
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Spacer
        height={2}
        sx={{
          backgroundColor: 'black',
        }}
      />
      <CardMedia
        title={name}
        image={image}
        sx={{
          height: 256,
          backgroundSize: 'contain',
          backgroundColor: 'black',
        }}
      />
      <Spacer
        height={2}
        sx={{
          backgroundColor: 'black',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="textSecondary" component="p">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {location} on {date}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <CardActions>
        {links.map((link) => {
          const { name: urlName, url } = link;
          return (
            <Button key={url} size="small">
              <ExternalLink color="secondary" href={url}>
                {urlName}
              </ExternalLink>
            </Button>
          );
        })}
      </CardActions>
    </Card>
  );
}
