import Link from 'next/link';
import { Container } from './styles';

const Button = (props) => {
  const { children, link, icon, name, onClick, path } = props;
  return (
    <Container onClick={!link ? onClick : null}>
      {link ? (
        <Link href={path}>
          <a>{name.toUpperCase()}</a>
        </Link>
      ) : (
        <>
          {!icon ? <h6>{name}</h6> : null}
          {children}
        </>
      )}
    </Container>
  );
};

export default Button;
