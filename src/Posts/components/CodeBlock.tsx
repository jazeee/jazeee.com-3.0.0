import './code.css';
import { InlineCodeBlock } from './InlineCodeBlock';

interface Props {
  codeSample: {
    html: string;
  };
}
export function CodeBlock(props: Props) {
  const { codeSample } = props;
  return (
    <pre className="language-typescript">
      <InlineCodeBlock codeSample={codeSample} />
    </pre>
  );
}
