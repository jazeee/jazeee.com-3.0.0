import { SxProps, Theme } from '@mui/material/styles';

export function mergeSxProps(
  sxProps1: SxProps<Theme> | undefined,
  sxProps2: SxProps<Theme> | undefined
): SxProps<Theme> {
  return [
    ...(Array.isArray(sxProps1) ? sxProps1 : [sxProps1]),
    ...(Array.isArray(sxProps2) ? sxProps2 : [sxProps2]),
  ].filter((sxProps) => Boolean(sxProps));
}
