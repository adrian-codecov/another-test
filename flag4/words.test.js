const { returnPlus3, reverse, hello } = require("./words");

test("returns the given array reversed", function () {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
});

test("returns + 3 of whatever you give it", function () {
  expect(returnPlus3(4)).toBe(7);
});

test("hello if 5", function () {
  expect(hello(5)).toBe("hello!");
});

test("nope if 6", function () {
  expect(hello(6)).toBe("nope");
});
