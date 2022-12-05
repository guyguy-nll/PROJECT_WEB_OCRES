import React from "react";
import Button from "./components/button";
import Movie from "./components/Movies";
import Meteo2 from "./components/meteo2";
import Humidity from "./components/humidity";
import Pression from "./components/pression";
import Wind from "./components/wind";
import Cloud from "./components/cloud";
import Meteo from "./components/meteo1";

import Search from "./components/search";
import axios from "axios";
import { map } from "lodash";
import "./App.css";

const BACKEND_BASE_URL = "http://localhost:3001/weather/";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      meteos: [],
      addWeatherInputValue: "",
    };
  }

  componentDidMount() {
    this.getList();
  }

  addWeatherInputChange = (event) => {
    this.setState({ addWeatherInputValue: event.target.value });

    console.log("value is:", event.target.value);
  };

  getList = () => {
    axios
      .get(BACKEND_BASE_URL)
      .then(
        (data) =>
          data.data &&
          data.data.meteos &&
          this.setState({ meteos: data.data.meteos })
      );
  };

  addWeather = () => {
    axios
      .delete(`${BACKEND_BASE_URL}/${this.state.meteos[0].id}`)
      .then((data) => this.getList());
    axios
      .put(BACKEND_BASE_URL, { meteo: this.state.addWeatherInputValue })
      .then((data) => this.getList());
  };

  deleteWeather = (id) => {
    axios.delete(`${BACKEND_BASE_URL}/${id}`).then((data) => this.getList());
  };

  renderCategory = (label, action) => {
    return (
      <div className="category">
        <Button text={label} onClick={action} />
      </div>
    );
  };

  render() {
    const { meteos, addWeatherInputValue } = this.state;
    const handleOnSearchChange = (searchData) => {
      const [lat, lon] = searchData.value.split(" ");
    };

    return (
      <div>
        <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div id="body3">
          <div className="category">
            <input
              type="text"
              id="addFilm"
              name="addFilm"
              onChange={this.addWeatherInputChange}
              value={addWeatherInputValue}
            />
            <Button text={"Ajouter"} onClick={this.addWeather} />
          </div>

          <div className="meteo1">
            {map(meteos, (meteo, index) => (
              <Meteo
                key={`meteo-${index}`}
                infos={meteo}
                deleteWeather={this.deleteWeather}
              />
            ))}
          </div>
        </div>

        <div id="body2">
          <div class="meteo2">
            {map(meteos, (meteo, index) => (
              <Meteo2
                key={`meteo-${index}`}
                infos={meteo}
                deleteWeather={this.deleteWeather}
              />
            ))}
          </div>
          <div class="all">
            {map(meteos, (meteo, index) => (
              <Humidity
                key={`meteo-${index}`}
                infos={meteo}
                deleteWeather={this.deleteWeather}
              />
            ))}
          </div>
          <div class="all">
            {map(meteos, (meteo, index) => (
              <Pression
                key={`meteo-${index}`}
                infos={meteo}
                deleteWeather={this.deleteWeather}
              />
            ))}
          </div>
          <div className="all">
            {map(meteos, (meteo, index) => (
              <Wind
                key={`meteo-${index}`}
                infos={meteo}
                deleteWeather={this.deleteWeather}
              />
            ))}
          </div>
          <div className="all">
            {map(meteos, (meteo, index) => (
              <Cloud
                key={`meteo-${index}`}
                infos={meteo}
                deleteWeather={this.deleteWeather}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
/*

            
   <div class="insight">
            <div class="humidity">
              <div class="middle">
                <div class="left">
                  <h3>Humidite</h3>
                  <h1>10</h1>
                </div>
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
              </div>
            </div>

            <div class="rain">
              <div class="middle">
                <div class="left">
                  <h3>Pluie</h3>
                  <h1>20</h1>
                </div>
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
              </div>
            </div>

            <div class="plants">
              <div class="middle">
                <div class="left">
                  <h3>Plante</h3>
                  <h1>30</h1>
                </div>
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
              </div>
            </div>

            <div class="wind">
              <div class="middle">
                <div class="left">
                  <h3>Vent</h3>
                  <h1>40</h1>
                </div>
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
              </div>
            </div>
          </div>         
            
            
            
            */
