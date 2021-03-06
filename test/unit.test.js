const given = require("mocha-testdata");
const chai = require("chai");

const horrorscopes = require("../horrorscopes.json");

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

describe("Test type of horroscope", () => {
  given(
    {
      date: new Date("2021-02-27"),
      result: horrorscopes.bad[1],
      value: 1,
    },
    {
      date: new Date("2021-02-28"),
      result: horrorscopes.bad[2],
      value: 2,
    },
    {
      date: new Date("2021-03-01"),
      result: horrorscopes.bad[3],
      value: 3,
    },
    {
      date: new Date("2020-02-28"),
      result: horrorscopes.good[0],
      value: undefined,
    },
    {
      date: new Date("2020-02-29"),
      result: horrorscopes.good[1],
      value: undefined,
    },
    {
      date: new Date("2020-03-01"),
      result: horrorscopes.good[0],
      value: 0,
    },
    {
      date: new Date("2019-02-27"),
      result: horrorscopes.bad[4],
      value: 4,
    },
    {
      date: new Date("2019-02-28"),
      result: horrorscopes.bad[5],
      value: 5,
    },
    {
      date: new Date("2019-03-01"),
      result: horrorscopes.bad[6],
      value: 6,
    }
  ).it("should return a horrorscope", (value) => {
    expect(utils.getHoroscope(value.value, value.date)).to.be.equal(
      value.result
    );
  });
});

describe("Test Signs", () => {
  given(
    {
      date: new Date("2020-01-20"),
      result: "Capricorn",
    },
    {
      date: new Date("2020-12-22"),
      result: "Capricorn",
    },
    {
      date: new Date("2020-01-21"),
      result: "Aquarius",
    },
    {
      date: new Date("2020-02-18"),
      result: "Aquarius",
    },
    {
      date: new Date("2020-02-19"),
      result: "Pisces",
    },
    {
      date: new Date("2020-03-20"),
      result: "Pisces",
    },
    {
      date: new Date("2020-03-21"),
      result: "Aries",
    },
    {
      date: new Date("2020-04-20"),
      result: "Aries",
    },
    {
      date: new Date("2020-04-21"),
      result: "Taurus",
    },
    {
      date: new Date("2020-05-21"),
      result: "Taurus",
    },
    {
      date: new Date("2020-05-22"),
      result: "Gemini",
    },
    {
      date: new Date("2020-06-21"),
      result: "Gemini",
    },
    {
      date: new Date("2020-06-22"),
      result: "Cancer",
    },
    {
      date: new Date("2020-07-22"),
      result: "Cancer",
    },
    {
      date: new Date("2020-07-23"),
      result: "Leo",
    },
    {
      date: new Date("2020-08-23"),
      result: "Leo",
    },
    {
      date: new Date("2020-08-24"),
      result: "Virgo",
    },
    {
      date: new Date("2020-09-22"),
      result: "Virgo",
    },
    {
      date: new Date("2020-09-23"),
      result: "Libra",
    },
    {
      date: new Date("2020-10-23"),
      result: "Libra",
    },
    {
      date: new Date("2020-10-24"),
      result: "Scorpio",
    },
    {
      date: new Date("2020-11-22"),
      result: "Scorpio",
    },
    {
      date: new Date("2020-11-23"),
      result: "Sagitarius",
    },
    {
      date: new Date("2020-12-21"),
      result: "Sagitarius",
    }
  ).it("Should return the correct sign", (value) => {
    expect(utils.getSign(value.date)).to.be.equal(value.result);
  });
});
