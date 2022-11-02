const simpleAssembler = require("./simpleAssemblerInterpreter");

test("simpleAssembler interprets a 4 simple assembler instructions", () => {
  expect(
    simpleAssembler(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"])
  ).toEqual({ a: 1 });
  expect(
    simpleAssembler(["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"])
  ).toEqual({ a: 0, b: -20 });
});
