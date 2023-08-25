import { UsersApp } from "../../src/Shared/Infraestructure/UsersApp";
import { AfterAll, BeforeAll} from "@cucumber/cucumber";

let application: UsersApp;

BeforeAll(() => {
    application = new UsersApp();
    void application.start();
});
  
AfterAll(() => {
    void application.stop();
});

export { application};