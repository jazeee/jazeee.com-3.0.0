import { Stack } from '@mui/material';

import { CardWithMargins } from './CardWithMargins';

interface Props {
  direction: 'column' | 'row' | 'row-reverse' | 'column-reverse';
}
export function StackOfResponsiveMarginedCards(props: Props) {
  const { direction } = props;
  return (
    <Stack spacing={2} direction={direction}>
      <CardWithMargins>Hello</CardWithMargins>
      <CardWithMargins>World</CardWithMargins>
    </Stack>
  );
}
