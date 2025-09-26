import gsap from "gsap";

export default class Calculate {
  constructor(averageTemp) {
    let averageTempLength = averageTemp.length;

    for (let i = 0; i < averageTempLength; i++) {
      gsap.to(document.querySelectorAll("#childCon > .maps" + i), {
        duration: 5,
        scaleY: averageTemp[i] / 10,
        transformOrigin: "bottom",
        ease: "elastic.out(1, 0.3)",
      });

      let color;

      if (averageTemp[i] > 10 && averageTemp[i] < 20) {
        color = "#f2a922";
      } else if (averageTemp[i] > 20) {
        color = "#F27f1b";
      } else {
        color = "#b4e0eb";
      }

      document.querySelector(`#childCon > .maps${i}`).style.backgroundColor =
        color;
    }
  }
}
