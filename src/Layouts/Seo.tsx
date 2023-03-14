import { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  // eslint-disable-next-line react/require-default-props
  children?: ReactElement;
}

export function Seo(props: Props) {
  const { description, title, children } = props;

  const titleWithSiteName = `${title} - Jaz Singh`;

  return (
    <Helmet>
      <title>{titleWithSiteName}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={titleWithSiteName} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Jaz Singh" />
      <meta name="twitter:title" content={titleWithSiteName} />
      <meta name="twitter:description" content={description} />
      {children}
    </Helmet>
  );
}
