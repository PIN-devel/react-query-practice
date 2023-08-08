import { rest } from "msw";
import option from "./datas/option.json";
import todos from "./datas/todos.json";

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.json(todos));
    // return res(ctx.status(500));
  }),

  rest.get("/option", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.json(option));
    // return res(ctx.status(500));
  }),
];
