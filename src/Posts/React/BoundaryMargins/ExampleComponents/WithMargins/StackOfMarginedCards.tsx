import { Stack } from '@mui/material';

import { CardWithMargins } from './CardWithMargins';

export function StackOfMarginedCards() {
  return (
    <Stack spacing={0}>
      <CardWithMargins>Hello</CardWithMargins>
      <CardWithMargins>World</CardWithMargins>
    </Stack>
  );
}
