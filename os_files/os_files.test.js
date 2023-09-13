const { returnWindows, returnIos, returnLinux } = require("./os_files");

test("returns Windows", function () {
  expect(returnWindows()).toEqual("Windows");
});
test("returns Ios", function () {
  expect(returnIos()).toEqual("Ios");
});
test("returns Linux", function () {
  expect(returnLinux()).toEqual("Linux");
});
