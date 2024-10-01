const { returnPlus3, reverse, lemur } = require("./frontend");

test("returns the given array reversed", function () {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
});

test("returns + 3 of whatever you give it", function () {
  expect(returnPlus3(4)).toBe(7);
});

test("hele", function () {
  expect(lemur(3)).toBe('hele');
});

test("ufa", function () {
  expect(lemur(4)).toBe('ufa');
});

// test("hello if 5", function () {
//   expect(hello(5)).toBe("hello!");
// });aa

// test("nope if 6", function () {
//   expect(hello(6)).toBe("nope");
// });
