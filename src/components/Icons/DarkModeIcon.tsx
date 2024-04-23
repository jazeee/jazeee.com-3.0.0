import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import { mergeSxProps } from 'src/components/utils';

// Based on https://materialdesignicons.com/

export function DarkModeIcon(props: SvgIconProps) {
  const { sx, ...svgProps } = props;
  return (
    <SvgIcon
      sx={mergeSxProps(sx, {
        width: 24,
        height: 24,
      })}
      {...svgProps}
    >
      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
    </SvgIcon>
  );
}
