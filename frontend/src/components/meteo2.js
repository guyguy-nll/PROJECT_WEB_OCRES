import React from "react";
import "./meteo2.css";
import { map, split } from "lodash";
import PropTypes from "prop-types";

export default class Meteo2 extends React.Component {
  renderInfo(label, info) {
    return (
      <div>
        <div>{label}</div>
        <div>{info}</div>
      </div>
    );
  }

  renderInfos(label, infos) {
    return (
      <div>
        <div>{label}</div>
        <div>
          {map(infos, (info) => (
            <div key={`infoList-${info}`}>{info}</div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { infos, deleteWeather } = this.props;
    const { id, meteo, temp, humidite, vent, pression } = infos;

    return (
      <div>
        <div class="titre">Votre localisation :</div>
        <div class="valeur">{this.renderInfo(meteo)}</div>
      </div>
    );
  }
}

Meteo2.propTypes = {
  active: PropTypes.string,
};

Meteo2.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Meteo2.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
