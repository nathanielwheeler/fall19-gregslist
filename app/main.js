import CarController from "./controllers/CarController.js";
import JobController from "./controllers/JobController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      jobController: new JobController()
    }
  }
}

window["app"] = new App()