import Carousel from "./components/Carousel";
// import Header from "./components/Header";
import Modal from "./components/Modal";
import Scrolly from "./components/Scrolly";
// import menuHamburger from "./components/menuHamburger";
import Animation from "./components/animation";
import Cursor from "./components/cursor";
import Text from "./components/textInfini";
import Scroll from "./components/scroll";
import HoverContact from "./components/hoverContact";
export default class ComponentFactory {
  constructor() {
    this.componentInstances = [];
    this.componentList = {
      Carousel,
      // Header,
      Modal,
      Scrolly,
      // menuHamburger,
      Animation,
      Cursor,
      Text,
      Scroll,
      HoverContact,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll("[data-component]");

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        const instance = new this.componentList[componentName](element);
        this.componentInstances.push(instance);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
