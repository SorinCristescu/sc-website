import PropTypes from "prop-types";
import { HeroContainer } from "./styles";

const triggers = Array.from(Array(400), (_, x) => x);
const circles = Array.from(Array(20), (_, x) => x);

const Hero = () => {
  return (
    <HeroContainer>
      <div className="container">
        {triggers.map((trigger, index) => {
          return <div key={index} className="trigger"></div>;
        })}
        <div className="monitor">
          <div className="camera o-x">
            <div className="camera o-y">
              <div className="camera o-z">
                <div className="vr">
                  {circles.map((circle, index) => {
                    return (
                      <div key={index} className="vr_layer">
                        <div className="vr_layer_item"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

Hero.propTypes = {};
export default Hero;
