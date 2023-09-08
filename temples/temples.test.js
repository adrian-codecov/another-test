const { returnTemple, sayGoodbye } = require("./temples");

test("returns the given array reversed", function () {
  expect(returnTemple()).toEqual("wow");
});

// test("returns + 3 of whatever you give it", function(){
//     expect(returnPlus3(4)).toBe(7)
// })
