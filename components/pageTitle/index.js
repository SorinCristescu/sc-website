import PropTypes from "prop-types";
import { Container } from "./styles";

const PageTitle = ({ title }) => {
  const letters = title.split("");
  console.log(letters);
  return (
    <Container>
      {letters.map((letter, index) => {
        return <h2 key={index}>{letter.toUpperCase()}</h2>;
      })}
    </Container>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
