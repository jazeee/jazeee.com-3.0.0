import { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  // eslint-disable-next-line react/require-default-props
  description?: string;
  // eslint-disable-next-line react/require-default-props
  children?: ReactElement;
}

export function Seo(props: Props) {
  const { description, title, children } = props;

  const metaDescription = description || '';
  const defaultTitle = '';

  return (
    <Helmet>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Jaz Singh" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </Helmet>
  );
}
