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

describe("Test leap is leap year", () => {
  given(
    {
      year: new Date("2000-01-01"),
      result: true,
    },
    {
      year: new Date("2001-01-01"),
      result: false,
    },
    {
      year: new Date("1900-01-01"),
      result: false,
    },
    {
      year: new Date("1999-01-01"),
      result: false,
    }
  ).it("should check if leap", (value) => {
    expect(utils.isLeapYear(value.year)).to.be.equal(value.result);
  });
});
