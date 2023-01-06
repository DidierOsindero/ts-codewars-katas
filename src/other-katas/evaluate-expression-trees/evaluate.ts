type Operator = "add" | "subtract" | "divide" | "multiply";
type Expression = number | { op: Operator; a: Expression; b: Expression };

function evaluate(expression: Expression): number {
  if (typeof expression === "number") {
    return expression;
  }

  switch (expression.op) {
    case "add":
      return evaluate(expression.a) + evaluate(expression.b);

    case "subtract":
      return evaluate(expression.a) - evaluate(expression.b);

    case "divide":
      return evaluate(expression.a) / evaluate(expression.b);

    case "multiply":
      return evaluate(expression.a) * evaluate(expression.b);
  }
}

const tree1: Expression = {
  op: "add",
  a: 1,
  b: 2,
};

const tree2: Expression = {
  op: "add",
  a: { op: "subtract", a: 2, b: 2 },
  b: { op: "add", a: 3, b: 3 },
};

const tree3: Expression = {
  op: "multiply",
  a: { op: "add", a: 1, b: 3 },
  b: { op: "subtract", a: 7, b: { op: "subtract", a: 20, b: 18 } },
};

console.log(evaluate(tree1), "- should equal 3");
console.log(evaluate(tree2), "- should equal 6");
console.log(evaluate(tree3), "- should equal 20");
