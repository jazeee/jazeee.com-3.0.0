import { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';

export interface ISeoProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactElement;
}

export function Seo(props: ISeoProps) {
  const { description, title, image, children } = props;

  const titleWithSiteName = `${title} - Jaz Singh`;
  const imageIsProvided = Boolean(image);
  const imageWithHost = image?.startsWith('http') ? image : `${window.location.origin}${image}`;

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
      {imageIsProvided && <meta itemProp="image" content={imageWithHost} />}
      {imageIsProvided && <meta property="og:image" content={imageWithHost} />}

      {children}
    </Helmet>
  );
}

Seo.defaultProps = {
  image: '',
  children: null,
};
