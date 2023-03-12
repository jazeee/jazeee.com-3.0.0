import { Seo } from './Seo';

interface Props {
  title: string;
  description: string;
}

export function Layout(props: React.PropsWithChildren<Props>) {
  const { title, description, children } = props;

  return (
    <>
      <Seo title={title} description={description} />
      <main>{children}</main>
    </>
  );
}
