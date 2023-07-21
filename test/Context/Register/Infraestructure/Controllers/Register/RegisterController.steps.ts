import { Given, Then, When } from "@cucumber/cucumber";
import request from "supertest";
import assert from 'assert';
import { application } from "../../../../HooksController.steps";


let _request: request.Test;
let _response: request.Response;

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer).put(route).send(JSON.parse(body));
});

When('the response status code should be {int} for register', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});


Then('the response content should be:', response => {
  assert.deepStrictEqual(_response.body, JSON.parse(response));
});