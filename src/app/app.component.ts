import { Component } from "@angular/core";
import { LocationStrategy, PathLocationStrategy, Location } from "@angular/common";
import { EventBusService } from "./event-bus.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class AppComponent {

  title = "microfrontend-webcomponent";
  cartLength: any;

  constructor (
    private eventBus: EventBusService,
    private location: Location) {}

  // Config Contract
  config = {
    "books": {
      loaded: false,
      path: "team-books/books.js",
      element: "team-books",
      receivers: ["team-shopping-cart"]
    },
    "shopping-cart": {
      loaded: false,
      path: "team-shopping-cart/shopping-cart.js",
      element: "team-shopping-cart",
      receivers: []
    }
  };

  ngOnInit() {
    this.cartLength = 0;
    this.loadBundle("books");
    this.loadBundle("shopping-cart");
  }

  loadBundle(name: string): void {

    const configItem = this.config[name];
    if (configItem.loaded) return;

    const content = document.getElementById("content");

    const script = document.createElement("script");
    script.src = configItem.path;
    content.appendChild(script);

    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);

    configItem.loaded = true;
    element.addEventListener("message", msg => this.handleMessage(msg));

    script.onerror = () => console.error(`error loading ${configItem.path}`);

    this.eventBus.registerClient(element, configItem.receivers);

  }

  toggleApp(appName) {

    console.log("TCL: AppComponent -> toggleApp -> appName", appName)

    const appNameLC = appName.split("/")[0];
    const configItem: any = this.config[appNameLC];

    console.log("TCL: AppComponent -> toggleApp -> appNameLC", appNameLC)
    console.log("TCL: AppComponent -> toggleApp -> configItem.loaded", configItem.loaded)

    if (configItem.loaded) {
      //this.router.navigateByUrl(`/${path}/`)
      //this.router.routerLink
    } else {
      this.loadBundle(appNameLC);
    }
  }

  handleMessage(msg): void {
    // alert('shell received message: ' + msg.detail.title);
    this.cartLength++;
    this.eventBus.setState(msg.detail.imageUrl + " || " + msg.detail.title + " || "+ msg.detail.price);
    console.log('shell received message: ', msg.detail);
  }

}
