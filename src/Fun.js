export default class Fun {
  constructor() {
    this.FunContainer = document.createElement("div");
    this.FunContainer.id = "FunContainer";
    document.body.appendChild(this.FunContainer);
    this.FunContainer.innerHTML = "This is some fun text!";

    this.FunContainer.style.position = "absolute";
    this.FunContainer.style.top = "20px";
    this.FunContainer.style.right = "20px";
    this.FunContainer.style.padding = "10px";
    this.FunContainer.style.backgroundColor = "#36aad8";
    this.FunContainer.style.color = "white";
    this.FunContainer.style.fontFamily = "Arial, Helvetica, sans-serif";
    this.FunContainer.style.borderRadius = "5px";
    this.FunContainer.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.3)";

    this.FunContainer.addEventListener("click", () => {
      alert("You clicked the fun text!");
      console.log("You clicked the fun text!");
    });
  }
}
