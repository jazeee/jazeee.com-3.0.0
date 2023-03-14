import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Spacer } from 'components/Spacers/Spacer';

import { IPresentation } from './data';
import { ExternalLink } from '../components/Links';

const CARD_BACKGROUND_COLOR = '#333';

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
          backgroundColor: CARD_BACKGROUND_COLOR,
        }}
      />
      <CardMedia
        title={name}
        image={image}
        sx={{
          height: 256,
          backgroundSize: 'contain',
          backgroundColor: CARD_BACKGROUND_COLOR,
        }}
      />
      <Spacer
        height={2}
        sx={{
          backgroundColor: CARD_BACKGROUND_COLOR,
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
      <CardActions
        sx={{
          gap: 1,
        }}
      >
        {links.map((link) => {
          const { name: urlName, url } = link;
          return (
            <ExternalLink key={url} color="secondary" to={url}>
              {urlName}
            </ExternalLink>
          );
        })}
      </CardActions>
    </Card>
  );
}
