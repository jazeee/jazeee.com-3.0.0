import './code.css';

interface Props {
  codeSample: {
    html: string;
  };
}
export function CodeBlock(props: Props) {
  const { codeSample } = props;
  return (
    <pre className="language-typescript">
      <code className="language-typescript">
        <span
          // FIXME - While it is generally safe to inject curated content, we should sanitize this html using DOMPurify
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: codeSample.html }}
        />
      </code>
    </pre>
  );
}
