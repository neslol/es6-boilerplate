import Calculate from "./Calculate";
import Sun from "./Sun";
import data from "../assets/json/temperature.json";
import Menu from "./Menu";
import Fun from "./Fun";

export default class Initialize {
  constructor() {
    this.weather = data;

    this.container = document.createElement("div");
    this.container.id = "container";
    this.container.className = "container";
    document.body.appendChild(this.container);

    this.container.innerHTML =
      "" +
      this.weather.month
        .map((item, index) => {
          return `
        <div id="childCon">
          <div class='block ${"maps" + index}'></div>
          <div class='temperature' id=${"temp" + index}>${
            this.weather.temperature[0].averageTemperature[index]
          }°C</div>
          <div class="month">${item}</div>
        </div>
      `;
        })
        .join("");

    const calc = new Calculate(this.weather.temperature[0].averageTemperature);
    new Sun();
    new Menu(this.weather);
    new Fun();
  } // END constructor
} // END class
