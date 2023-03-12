import Box, { BoxProps } from '@mui/material/Box';
import { forwardRef } from 'react';

export interface ISpanProps extends Omit<BoxProps, 'component'> {}

export const Span = forwardRef((props: ISpanProps, ref) => {
  return <Box component="span" {...props} ref={ref} />;
});
