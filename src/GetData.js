export default class GetData {
  constructor(weather, CMI) {
    let getChildTempCon = document.querySelectorAll(".temperature"); //nodelist
    const lengthOfChildTempCon = getChildTempCon.length;
    for (let i = 0; i < lengthOfChildTempCon; i++) {
      document.querySelector("#temp" + i).innerHTML =
        weather.temperature[CMI].averageTemperature[i] + "°C";
    }
  }
}
