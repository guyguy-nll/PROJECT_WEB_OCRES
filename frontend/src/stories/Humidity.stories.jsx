import { Humidity } from "../components/humidity.js";
import "../components/all.css";
import PropTypes from "prop-types";

export default {
  title: "UI/Humidity",
  component: Humidity,
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

export const Default = (args) => {
  return (
    <div class="all">
      <div class="titre">Taux d'humidité :</div>
      <div class="valeur">80%</div>
    </div>
  );
};
