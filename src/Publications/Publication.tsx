import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { IPublication } from './data';
import { ExternalLink } from '../components/Links';

interface Props {
  publication: IPublication;
}

export function Publication(props: Props) {
  const { publication } = props;
  return (
    <Box
      sx={{
        '& + &': {
          borderTop: '1px solid #e6e6e6',
        },
      }}
    >
      <Typography variant="h6" component="p">
        <ExternalLink to={publication.url}>{publication.name}</ExternalLink>
      </Typography>
      <Typography variant="subtitle1" component="p">
        {publication.authors}
      </Typography>
      <Typography variant="caption">
        {publication.media} - ({publication.date})
      </Typography>
    </Box>
  );
}
