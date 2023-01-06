import exp from "constants";
import { evaluate, Expression } from "./evaluate";
const tree1: Expression = {
  op: "add",
  a: "x",
  b: "y",
};

const tree2: Expression = {
  op: "add",
  a: { op: "subtract", a: "x", b: "x" },
  b: { op: "add", a: "y", b: 3 },
};

const tree3: Expression = {
  op: "multiply",
  a: { op: "add", a: "x", b: 3 },
  b: { op: "subtract", a: "y", b: { op: "subtract", a: 20, b: 18 } },
};

const tree4: Expression = {
  op: "divide",
  a: { op: "multiply", a: "x", b: "x" },
  b: { op: "add", a: "y", b: 3 },
};
test("Given an expression tree, evaluate evaluates the result of calculations in that tree, returning a number", () => {
  expect(evaluate(tree1, { x: 4, y: 6 })).toBe(10);
  expect(evaluate(tree2, { x: 2, y: 6 })).toBe(9);
  expect(evaluate(tree3, { x: 1, y: 7 })).toBe(20);
  expect(evaluate(tree4, { x: 2, y: -1 })).toBe(2);
});
