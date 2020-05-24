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
