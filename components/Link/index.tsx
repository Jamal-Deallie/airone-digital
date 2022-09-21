import { ReactNode } from 'react';
import { useRouter } from 'next/router';

type ActiveLinkProps = {
  href: string;
  children: ReactNode;
};

const ActiveLink = ({ children, href }: ActiveLinkProps) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  };

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

export default ActiveLink;
