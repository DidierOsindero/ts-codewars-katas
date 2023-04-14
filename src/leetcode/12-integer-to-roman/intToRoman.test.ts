import intToRoman from "./intToRoman";
describe("intToRoman", () => {
  it("should return 'I' when given 1", () => {
    expect(intToRoman(1)).toBe("I");
  });
  it("should return 'X' when given 10", () => {
    expect(intToRoman(10)).toBe("X");
  });
  it("should return 'IX' when given 9", () => {
    expect(intToRoman(9)).toBe("IX");
  });
  it("should return 'XC' when given 90", () => {
    expect(intToRoman(90)).toBe("XC");
  });
  it("should return 'XCI' when given 91", () => {
    expect(intToRoman(91)).toBe("XCI");
  });
  it("should return 'MCMXCIV' when given 1994", () => {
    expect(intToRoman(1994)).toBe("MCMXCIV");
  });
});
