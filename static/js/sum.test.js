const count = require("./sum.js");
const calc = new count.calcs();
// start string length
test("return the length of string", () => {
  expect(count.stringLength("osama")).toBe(5);
});
// end string length

// start string reverse
test("return the reverse of string", () => {
  expect(count.stringReverse("osama")).toBe("amaso");
});
// end string reverse
// start calculator
describe("this is operations of the calculator", () => {
  test("return the add of nums", () => {
    expect(calc.add(1, 2)).toBe(3);
  });
  test("return the subtract of nums", () => {
    expect(calc.subtract(2, 1)).toBe(1);
  });
  test("return the multiple of nums", () => {
    expect(calc.multiple(1, 2)).toBe(2);
  });
  test("return the divide of nums", () => {
    expect(calc.divide(2, 1)).toBe(2);
  });
});
// end calculator
// start string capitalize
test("return the capitalize firt letter in the string", () => {
  expect(count.stringCapitalize("osama")).toBe("Osama");
});
// end string capitalize
