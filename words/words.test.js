const {returnPlus3, reverse, hello, bye} = require('./words');

test("returns the given array reversed", function(){
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
})

test("returns + 3 of whatever you give it", function(){
    expect(returnPlus3(4)).toBe(7)
})

test("bye", function(){
    expect(bye()).toBe("bye")
})
