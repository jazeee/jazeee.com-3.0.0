import Typography from '@mui/material/Typography';

import { Span } from 'components/Span';

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
          color: (theme) => theme.palette.secondary.main,
        }}
      >
        <b>{name}</b>
      </Span>
      : {description}
    </Typography>
  );
}
