// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { rest } from "msw";
import { setupServer } from "msw/node";

import fixture from "../cypress/fixtures/example.json";

const server = setupServer(
  rest.get("https://api.randomuser.me", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fixture));
  }),
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
