const { sayGoodbye } = require("./temples");

// test("returns the given array reversed", function () {
//   expect(returnTemple()).toEqual("wow");
// });

test("returns", function () {
  expect(sayGoodbye()).toBe("goodbye");
});
