import Box, { BoxProps } from '@mui/material/Box';
import { forwardRef } from 'react';

import { mergeSxProps } from './utils';

export interface IImageProps extends Omit<BoxProps, 'component' | 'children'> {
  src: string;
  alt: string;
}

export const Image = forwardRef((props: IImageProps, ref) => {
  const { sx, width, height, ...boxProps } = props;

  return (
    <Box
      component="img"
      {...boxProps}
      ref={ref}
      sx={mergeSxProps(
        {
          /**
           * Box does not pass `width` and `height` through.
           * Instead, pass it in via `sx`
           */
          width,
          height,
        },
        sx
      )}
    />
  );
});
