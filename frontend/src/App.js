import React from "react";
import Button from "./components/button";
import Movie from "./components/movie";
import Search from "./components/search";
import axios from "axios";
import { map } from "lodash";
import "./App.css";

const BACKEND_BASE_URL = "http://localhost:3001/movies/";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      meteos: [],
      addFilmInputValue: "",
    };
  }

  componentDidMount() {
    this.getList();
  }

  addFilmInputChange = (event) => {
    this.setState({ addFilmInputValue: event.target.value });

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

  addMovie = () => {
    axios
      .put(BACKEND_BASE_URL, { meteo: this.state.addFilmInputValue })
      .then((data) => this.getList());
  };

  deleteMovie = (id) => {
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
    const { meteos, addFilmInputValue } = this.state;
    const handleOnSearchChange = (searchData) => {
      const [lat, lon] = searchData.value.split(" ");
    };

    return (
      <div>
        {this.renderCategory("Refresh", this.getList)}
        <div className="category">
          <input
            type="text"
            id="addFilm"
            name="addFilm"
            onChange={this.addFilmInputChange}
            value={addFilmInputValue}
          />
          <Search onSearchChange={handleOnSearchChange} />
          <Button text={"Add movie"} onClick={this.addMovie} />
        </div>

        <div id="body2">
          <div className="movies">
            {map(meteos, (meteo, index) => (
              <Movie
                key={`meteo-${index}`}
                infos={meteo}
                deleteMovie={this.deleteMovie}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
