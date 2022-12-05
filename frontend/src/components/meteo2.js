import React from "react";
import "./meteo2.css";
import { map, split } from "lodash";

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
        <div>{this.renderInfo("Localisation", meteo)}</div>
      </div>
    );
  }
}
