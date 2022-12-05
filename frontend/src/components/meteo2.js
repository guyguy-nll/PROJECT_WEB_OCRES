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
        <div class="titre">Votre localisation :</div>
        <div class="valeur">{this.renderInfo(meteo)}</div>
        <img class="img" src="http://openweathermap.org/img/wn/02d@2x.png"></img>
      </div>
    );
  }
}
