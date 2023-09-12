const { returnTemple, sayGoodbye, andTrue } = require("./temples");

test("returns the given array reversed", function () {
  expect(returnTemple()).toEqual("wow");
});

test("returns goodbye", function () {
  expect(sayGoodbye()).toBe("goodbye");
});

test("returns true", function () {
  expect(andTrue()).toBe(true);
});
