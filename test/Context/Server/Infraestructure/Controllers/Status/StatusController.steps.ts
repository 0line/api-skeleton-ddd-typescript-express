import { AfterAll, BeforeAll, Given, Then } from "@cucumber/cucumber";
import request from "supertest";

import { UsersApp } from '../../../../../../src/Context/Shared/Infraestructure/UsersApp';


let _request: request.Test;
let application: UsersApp;

Given("I send a GET request to {string}", (route: string) => {
  _request = request(application.httpServer).get(route);
});

Then("the response status code should be {int}", async (status: number) => {
  await _request.expect(status);
});

BeforeAll(() => {
  application = new UsersApp();
  void application.start();
});

AfterAll(() => {
  void application.stop();
});
