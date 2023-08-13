import { Container, Paper } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function ExampleComponentWrapper(props: Props) {
  const { children } = props;
  return (
    <Container maxWidth="xs" sx={{ backgroundColor: 'Highlight' }}>
      <Paper elevation={2}>{children}</Paper>
    </Container>
  );
}
