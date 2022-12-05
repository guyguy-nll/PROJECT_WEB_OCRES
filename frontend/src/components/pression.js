import React from "react";
import "./all.css";
import { map, split } from "lodash";

export default class Pression extends React.Component {
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
        <div class="titre">Pression actuel :</div>
        <div class="valeur"> {this.renderInfo(pression)}</div>
      </div>
    );
  }
}
