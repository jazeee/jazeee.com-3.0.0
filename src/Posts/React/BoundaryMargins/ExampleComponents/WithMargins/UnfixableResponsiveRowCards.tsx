import { Box, Stack } from '@mui/material';

import { CardWithMargins } from './CardWithMargins';

export function UnfixableResponsiveRowCards() {
  return (
    <Stack spacing={2} direction="row">
      <Box marginBottom={-2}>
        <CardWithMargins>Hello</CardWithMargins>
      </Box>
      <Box marginBottom={-2}>
        <CardWithMargins>World</CardWithMargins>
      </Box>
    </Stack>
  );
}
