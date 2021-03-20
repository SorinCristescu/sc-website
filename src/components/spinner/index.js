import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

const Spinner = ({ visible, height, width, timeout }) => {
  return (
    <Loader
      visible={visible}
      type="Grid"
      color={(props) => props.theme.colors.foreground}
      height={height}
      width={width}
      timeout={timeout} //3 secs
    />
  );
};

Spinner.propTypes = {
  visible: PropTypes.bool,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  timeout: PropTypes.number,
};

export default Spinner;
