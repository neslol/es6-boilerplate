export default class Initialize {
  constructor() {
    console.log("alt ok");

    this.counter = 0;
    const myName = "Arseniy";
    let age = 17;

    this.myFunc(myName, age);
  } // END constructor

  myFunc(n, a) {
    console.log(n, a);
  }
} // END class
