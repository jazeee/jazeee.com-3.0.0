import { Stack } from '@mui/material';

import { SimpleCard } from './SimpleCard';

export function StackOfSimpleCards() {
  return (
    <Stack spacing={2}>
      <SimpleCard>Hello</SimpleCard>
      <SimpleCard>World</SimpleCard>
    </Stack>
  );
}
