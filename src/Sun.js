import { gsap } from "gsap";
import mSun from "../assets/sun-big-white.png";

export default class Sun {
  constructor() {
    this.sun = document.createElement("div");
    this.sun.id = "sun";
    this.sun.className = "sun";
    document.body.appendChild(this.sun);
    this.sun.innerHTML = `<img src=${mSun} alt="sun" />`;
    gsap.to("#sun", {
      duration: 20,
      rotation: 360,
      transformOrigin: "center",
      repeat: -1,
    });
    let cubeRotating = [
      { transform: "rotate(0deg)" },
      { transform: "rotate(360deg)" },
    ];
    let cubeTiming = {
      duration: 30000,
      iterations: Infinity,
    };
    document.querySelector("#sun").animate(cubeRotating, cubeTiming);
    //** End Build */
  }
}
