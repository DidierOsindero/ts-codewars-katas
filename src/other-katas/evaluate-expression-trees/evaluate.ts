type Operator = "add" | "subtract" | "divide" | "multiply";
type Variable = "x" | "y";
export type Expression =
  | Variable
  | number
  | { op: Operator; a: Expression; b: Expression };

export function evaluate(
  expression: Expression,
  variableBindings: { x: number; y: number }
): number {
  if (typeof expression === "number") {
    return expression;
  }

  if (expression === "x") {
    return variableBindings.x;
  }

  if (expression === "y") {
    return variableBindings.y;
  }

  switch (expression.op) {
    case "add":
      return (
        evaluate(expression.a, variableBindings) +
        evaluate(expression.b, variableBindings)
      );

    case "subtract":
      return (
        evaluate(expression.a, variableBindings) -
        evaluate(expression.b, variableBindings)
      );

    case "divide":
      return (
        evaluate(expression.a, variableBindings) /
        evaluate(expression.b, variableBindings)
      );

    case "multiply":
      return (
        evaluate(expression.a, variableBindings) *
        evaluate(expression.b, variableBindings)
      );
    default:
      return 0;
  }
}

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

console.log(evaluate(tree1, { x: 4, y: 6 }), "- should equal 10");
console.log(evaluate(tree2, { x: 2, y: 6 }), "- should equal 9");
console.log(evaluate(tree3, { x: 1, y: 7 }), "- should equal 20");
