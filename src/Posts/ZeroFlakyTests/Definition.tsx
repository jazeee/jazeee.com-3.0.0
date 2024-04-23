import Typography from '@mui/material/Typography';

import { Span } from 'src/components/Span';

interface IPostDefinition {
  name: string;
  description: string;
}
export function PostDefinitionBlock(props: IPostDefinition) {
  const { name, description } = props;
  return (
    <Typography paragraph>
      <Span
        sx={{
          color: (theme) => theme.typography.h1.color,
        }}
      >
        <b>{name}</b>
      </Span>
      : {description}
    </Typography>
  );
}
