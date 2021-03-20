import PropTypes from "prop-types";
import Link from "next/link";
import { Container } from "./styles";

const Button = (props) => {
  const {
    children,
    link,
    icon,
    name,
    onClick,
    path,
    minWidth,
    disabled,
  } = props;
  return (
    <Container onClick={!link ? onClick : null} minWidth={minWidth}>
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

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  minWidth: PropTypes.string.isRequired,
};

export default Button;
