const given = require("mocha-testdata");
const chai = require("chai");

const utils = require("../utils");

const { expect, assert } = chai;

describe("Test day of year", () => {
  it("Should return an integer", () => {
    let value = utils.getDayOfYear(new Date());
    expect(value).to.not.be.undefined;
    expect(Number.isInteger(value)).to.be.true;
  });

  given(
    {
      date: new Date("2020-05-24"),
      day: 145,
    },
    {
      date: new Date("2019-05-24"),
      day: 144,
    },
    {
      date: new Date("2020-01-10"),
      day: 10,
    },
    {
      date: new Date("2019-01-10"),
      day: 10,
    }
  ).it("should convert", (value) => {
    expect(utils.getDayOfYear(value.date)).to.be.equal(value.day);
  });
});

describe('Test different inputs for name field', function() {
    describe('Valid Input', function() {
        let inputs = [["T", "One Capital Letter"], ["t", "One lowercase letter"], ["TEST", "All letters capitalized"], ["test", "All Letters Lowercase"], ["Test Test", "Space in between characters"]];
        inputs.forEach(data => {
           it("Should return user input", function() {

           });
        });
    });
    describe('Invalid Input', function() {
        let inputs = [["t-e-s-t", "symbols inside text"], ["-test-", "Symbols wrapping roman alpabet characters"], ["testtesttesttesttesttesttesttesttesttesttesttest", "Too many characters"], ["", "Blank"]
        ["アントニア", "Japanese Characters"],["吟味", "Chinese Characters"],["%^$£@", "Only symbols"],["1-2-2003", "Date Format"]];
        inputs.forEach(data => {
           it("Shouldn't return an error", function() {

           });
    });
});





