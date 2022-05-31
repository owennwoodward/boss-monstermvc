import { ChipsController } from "./Controllers/ChipsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  chipsController = new ChipsController();
}

window["app"] = new App();
