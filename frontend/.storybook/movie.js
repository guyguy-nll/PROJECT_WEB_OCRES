import React from "react";
import Button from "./button";
import { map, split } from "lodash";
import "./movie.css";

export default class Movies extends React.Component {
  renderInfo(label, info) {
    return (
      <div className="infoLine">
        <div className="infoLabel">{label}</div>
        <div className="info">{info}</div>
      </div>
    );
  }

  renderInfos(label, infos) {
    return (
      <div className="infoLine">
        <div className="infoLabel">{label}</div>
        <div>
          {map(infos, (info) => (
            <div className="info" key={`infoList-${info}`}>
              {info}
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { infos, deleteMovie } = this.props;
    const { id, meteo, temp, humidite, nuage, pression, vent } = infos;

    return (
      <div className="movie">
        <div className="infos">
          {this.renderInfo("Localisation", meteo)}
          {this.renderInfo("Temp", temp)}
          {this.renderInfo("humidite", humidite)}
          {this.renderInfo("vent", vent)}
          {this.renderInfo("nuage", nuage)}
          {this.renderInfo("pression", pression)}
        </div>
        <Button text={"Supprimer"} onClick={() => deleteMovie(id)} />
      </div>
    );
  }
}
