import Calculate from "./Calculate";
import GetData from "./GetData";

export default class Menu {
  constructor(data) {
    this.yearContainer = document.createElement("nav");
    this.yearContainer.id = "yearContainer";
    document.body.appendChild(this.yearContainer);

    this.yearContainer.innerHTML = data.temperature
      .map((item, index) => {
        return `
        <div class=${"year" + index} id="year" data-index=${index}>${
          item.year
        }</div>
      `;
      })
      .join("");

    this.getChildYearCon = document.querySelectorAll("#yearContainer > #year"); //nodelist
    this.getChildYearCon.forEach((item) => {
      item.addEventListener("click", (event) => {
        for (let i = 0; i < this.getChildYearCon.length; i++) {
          this.getChildYearCon[i].style.backgroundColor = "#36aad8";
        }

        event.currentTarget.style.backgroundColor = "#04658c";
        let currentDataIndex = event.currentTarget.dataset.index;
        let getDataFromIndex =
          data.temperature[currentDataIndex].averageTemperature;
        new Calculate(getDataFromIndex);
        new GetData(data, currentDataIndex);
      }); // END event
    });
  }
}
