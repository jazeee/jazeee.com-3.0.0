import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { Spacer } from 'components/Spacers/Spacer';

export function PageLoadingIndicator() {
  return (
    <Box display="flex" flexDirection="column" width="100%" alignItems="center">
      <Box height="35vh" />
      <CircularProgress color="secondary" size={64} />
      <Spacer height={2} />
      <Typography variant="h2" component="p">
        Loading...
      </Typography>
    </Box>
  );
}
