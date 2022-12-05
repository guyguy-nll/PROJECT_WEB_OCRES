import { Meteo2 } from "../components/meteo2.js";
import "../components/meteo2.css";
import PropTypes from "prop-types";

export default {
  title: "UI/Meteo2",
  component: Meteo2,
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
    <div class="meteo2">
      <div class="titre">Votre localisation :</div>
      <div class="valeur">Paris</div>
    </div>
  );
};
