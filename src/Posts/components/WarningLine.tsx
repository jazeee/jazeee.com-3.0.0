import WarningSharpIcon from '@mui/icons-material/WarningSharp';
import { ReactNode } from 'react';

import { Span } from 'src/components/Span';

interface Props {
  children: ReactNode;
}

export function WarningLine(props: Props) {
  const { children } = props;
  return (
    <Span sx={{ textAlign: 'left' }}>
      <WarningSharpIcon
        color="warning"
        sx={{
          verticalAlign: 'text-bottom',
          marginRight: 1,
        }}
      />{' '}
      {children}
    </Span>
  );
}
