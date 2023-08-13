import { Stack } from '@mui/material';

import { SimpleCard } from './SimpleCard';

interface Props {
  direction: 'column' | 'row' | 'row-reverse' | 'column-reverse';
}
export function StackOfResponsiveCards(props: Props) {
  const { direction } = props;
  return (
    <Stack spacing={2} direction={direction}>
      <SimpleCard>Hello</SimpleCard>
      <SimpleCard>World</SimpleCard>
    </Stack>
  );
}
