import { Box, Stack } from '@mui/material';

import { CardWithMargins } from './CardWithMargins';

export function StackOfColumnFixedMarginedCards() {
  return (
    <Stack spacing={0}>
      <CardWithMargins>Hello</CardWithMargins>
      <Box marginBottom={-2}>
        <CardWithMargins>World</CardWithMargins>
      </Box>
    </Stack>
  );
}
