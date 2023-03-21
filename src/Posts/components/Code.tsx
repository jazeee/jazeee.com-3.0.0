import Box from '@mui/material/Box';

import { Span } from 'components/Span';

interface Props {
  children: string;
}

export function Code(props: Props) {
  const { children } = props;
  return (
    <Box
      component="code"
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.getContrastText(theme.palette.background.default),
        borderRadius: 1,
        paddingX: 0.5,
      }}
    >
      <Span
        sx={{
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}
      >
        {children}
      </Span>
    </Box>
  );
}
