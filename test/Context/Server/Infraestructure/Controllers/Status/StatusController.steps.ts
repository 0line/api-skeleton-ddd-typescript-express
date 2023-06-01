import { Given, Then } from "@cucumber/cucumber";
import request from "supertest";
import { application } from "../../../../HooksController.steps";

let _request: request.Test;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  await _request.expect(status);
});
