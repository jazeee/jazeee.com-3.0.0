import Box, { BoxProps } from '@mui/material/Box';

import { mergeSxProps } from 'components/utils';

interface Props extends BoxProps {
  height: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 12 | 16;
}
export function Spacer(props: Props) {
  const { height, sx, ...boxProps } = props;
  return (
    <Box
      component="span"
      display="block"
      {...boxProps}
      sx={mergeSxProps(sx, { padding: height })}
    />
  );
}
