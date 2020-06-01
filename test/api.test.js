const chai = require("chai");
const chaiHttp = require("chai-http");

const { givenAsync } = require("mocha-testdata");

const { app, close } = require("../index");
const { expect } = chai;

const predictions = require("../horrorscopes.json");

chai.use(chaiHttp);

describe("API", () => {
  after((done) => {
    close();
    done();
  });

  describe("GET /ping", () => {
    it("Should return 200 OK", (done) => {
      chai
        .request(app)
        .get("/ping")
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe("POST /date/leap", () => {
    givenAsync(
      {
        date: "1997-01-01",
        res: false,
      },
      {
        date: "2000-01-01",
        res: true,
      },
      {
        date: "1900-01-01",
        res: false,
      }
    ).it("should return is leap", (done, value) => {
      chai
        .request(app)
        .post("/date/leap")
        .send({ date: value.date })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body.isLeap).to.be.equal(value.res);
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe("POST /submit", () => {
    givenAsync(
      {
        date: "1997-03-21",
        sum: 0,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-03-21",
        sum: 1,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-03-21",
        sum: 2,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-03-21",
        sum: 3,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-03-21",
        sum: 4,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-03-21",
        sum: 5,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-03-21",
        sum: 6,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1996-03-21",
        sum: null,
        zodiac: "Aries",
        good: true,
      },
      {
        date: "1996-04-19",
        sum: null,
        zodiac: "Aries",
        good: true,
      },
      {
        date: "1997-04-19",
        sum: 0,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-04-19",
        sum: 1,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-04-19",
        sum: 2,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-04-19",
        sum: 3,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-04-19",
        sum: 4,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-04-19",
        sum: 5,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-04-19",
        sum: 6,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-04-19",
        sum: 0,
        zodiac: "Aries",
        good: false,
      },
      {
        date: "1997-04-21",
        sum: 0,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-04-21",
        sum: 1,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-04-21",
        sum: 2,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-04-21",
        sum: 3,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-04-21",
        sum: 4,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-04-21",
        sum: 5,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-04-21",
        sum: 6,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1996-04-21",
        sum: null,
        zodiac: "Taurus",
        good: true,
      },
      {
        date: "1997-05-20",
        sum: 0,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-05-20",
        sum: 1,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-05-20",
        sum: 2,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-05-20",
        sum: 3,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-05-20",
        sum: 4,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-05-20",
        sum: 5,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-05-20",
        sum: 6,
        zodiac: "Taurus",
        good: false,
      },
      {
        date: "1997-05-22",
        sum: 0,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-05-22",
        sum: 1,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-05-22",
        sum: 2,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-05-22",
        sum: 3,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-05-22",
        sum: 4,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-05-22",
        sum: 5,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-05-22",
        sum: 6,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1996-05-22",
        sum: null,
        zodiac: "Gemini",
        good: true,
      },
      {
        date: "1997-06-20",
        sum: 0,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-06-20",
        sum: 1,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-06-20",
        sum: 2,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-06-20",
        sum: 3,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-06-20",
        sum: 4,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-06-20",
        sum: 5,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-06-20",
        sum: 6,
        zodiac: "Gemini",
        good: false,
      },
      {
        date: "1997-06-22",
        sum: 0,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-06-22",
        sum: 1,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-06-22",
        sum: 2,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-06-22",
        sum: 3,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-06-22",
        sum: 4,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-06-22",
        sum: 5,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-06-22",
        sum: 6,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1996-06-22",
        sum: null,
        zodiac: "Cancer",
        good: true,
      },
      {
        date: "1997-07-22",
        sum: 0,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-07-22",
        sum: 1,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-07-22",
        sum: 2,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-07-22",
        sum: 3,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-07-22",
        sum: 4,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-07-22",
        sum: 5,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-07-22",
        sum: 6,
        zodiac: "Cancer",
        good: false,
      },
      {
        date: "1997-07-23",
        sum: 0,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-07-23",
        sum: 1,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-07-23",
        sum: 2,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-07-23",
        sum: 3,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-07-23",
        sum: 4,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-07-23",
        sum: 5,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-07-23",
        sum: 6,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1996-07-23",
        sum: null,
        zodiac: "Leo",
        good: true,
      },
      {
        date: "1996-08-22",
        sum: null,
        zodiac: "Leo",
        good: true,
      },
      {
        date: "1997-08-22",
        sum: 0,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-08-22",
        sum: 1,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-08-22",
        sum: 2,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-08-22",
        sum: 3,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-08-22",
        sum: 4,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-08-22",
        sum: 5,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-08-22",
        sum: 6,
        zodiac: "Leo",
        good: false,
      },
      {
        date: "1997-08-24",
        sum: 0,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-08-24",
        sum: 1,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-08-24",
        sum: 2,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-08-24",
        sum: 3,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-08-24",
        sum: 4,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-08-24",
        sum: 5,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-08-24",
        sum: 6,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1996-08-24",
        sum: null,
        zodiac: "Virgo",
        good: true,
      },
      {
        date: "1996-09-22",
        sum: null,
        zodiac: "Virgo",
        good: true,
      },
      {
        date: "1997-09-22",
        sum: 0,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-09-22",
        sum: 1,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-09-22",
        sum: 2,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-09-22",
        sum: 3,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-09-22",
        sum: 4,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-09-22",
        sum: 5,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-09-22",
        sum: 6,
        zodiac: "Virgo",
        good: false,
      },
      {
        date: "1997-09-23",
        sum: 0,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-09-23",
        sum: 1,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-09-23",
        sum: 2,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-09-23",
        sum: 3,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-09-23",
        sum: 4,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-09-23",
        sum: 5,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-09-23",
        sum: 6,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1996-10-22",
        sum: null,
        zodiac: "Libra",
        good: true,
      },
      {
        date: "1996-10-22",
        sum: null,
        zodiac: "Libra",
        good: true,
      },
      {
        date: "1997-10-22",
        sum: 0,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-10-22",
        sum: 1,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-10-22",
        sum: 2,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-10-22",
        sum: 3,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-10-22",
        sum: 4,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-10-22",
        sum: 5,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-10-22",
        sum: 6,
        zodiac: "Libra",
        good: false,
      },
      {
        date: "1997-10-24",
        sum: 0,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-10-24",
        sum: 1,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-10-24",
        sum: 2,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-10-24",
        sum: 3,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-10-24",
        sum: 4,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-10-24",
        sum: 5,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-10-24",
        sum: 6,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1996-10-24",
        sum: null,
        zodiac: "Scorpio",
        good: true,
      },
      {
        date: "1996-11-21",
        sum: null,
        zodiac: "Scorpio",
        good: true,
      },
      {
        date: "1997-11-21",
        sum: 0,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-11-21",
        sum: 1,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-11-21",
        sum: 2,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-11-21",
        sum: 3,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-11-21",
        sum: 4,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-11-21",
        sum: 5,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-11-21",
        sum: 6,
        zodiac: "Scorpio",
        good: false,
      },
      {
        date: "1997-11-24",
        sum: 0,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-11-24",
        sum: 1,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-11-24",
        sum: 2,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-11-24",
        sum: 3,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-11-24",
        sum: 4,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-11-24",
        sum: 5,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-11-24",
        sum: 6,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1996-11-24",
        sum: null,
        zodiac: "Sagitarius",
        good: true,
      },
      {
        date: "1996-12-21",
        sum: null,
        zodiac: "Sagitarius",
        good: true,
      },
      {
        date: "1997-12-21",
        sum: 0,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-12-21",
        sum: 1,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-12-21",
        sum: 2,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-12-21",
        sum: 3,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-12-21",
        sum: 4,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-12-21",
        sum: 5,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-12-21",
        sum: 6,
        zodiac: "Sagitarius",
        good: false,
      },
      {
        date: "1997-12-22",
        sum: 0,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-12-22",
        sum: 1,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-12-22",
        sum: 2,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-12-22",
        sum: 3,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-12-22",
        sum: 4,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-12-22",
        sum: 5,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-12-22",
        sum: 6,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1996-12-22",
        sum: null,
        zodiac: "Capricorn",
        good: true,
      },
      {
        date: "1996-01-19",
        sum: null,
        zodiac: "Capricorn",
        good: true,
      },
      {
        date: "1997-01-19",
        sum: 0,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-01-19",
        sum: 1,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-01-19",
        sum: 2,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-01-19",
        sum: 3,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-01-19",
        sum: 4,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-01-19",
        sum: 5,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-01-19",
        sum: 6,
        zodiac: "Capricorn",
        good: false,
      },
      {
        date: "1997-01-21",
        sum: 0,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-01-21",
        sum: 1,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-01-21",
        sum: 2,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-01-21",
        sum: 3,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-01-21",
        sum: 4,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-01-21",
        sum: 5,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-01-21",
        sum: 6,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1996-01-21",
        sum: null,
        zodiac: "Aquarius",
        good: true,
      },
      {
        date: "1996-02-18",
        sum: null,
        zodiac: "Aquarius",
        good: true,
      },
      {
        date: "1997-02-18",
        sum: 0,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-02-18",
        sum: 1,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-02-18",
        sum: 2,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-02-18",
        sum: 3,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-02-18",
        sum: 4,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-02-18",
        sum: 5,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-02-18",
        sum: 6,
        zodiac: "Aquarius",
        good: false,
      },
      {
        date: "1997-02-19",
        sum: 0,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1997-02-19",
        sum: 1,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1997-02-19",
        sum: 2,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1997-02-19",
        sum: 3,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1997-02-19",
        sum: 4,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1997-02-19",
        sum: 5,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1997-02-19",
        sum: 6,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1996-02-19",
        sum: null,
        zodiac: "Pisces",
        good: true,
      },
      {
        date: "1996-03-20",
        sum: null,
        zodiac: "Pisces",
        good: true,
      },
      {
        date: "1997-03-20",
        sum: 0,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1997-03-20",
        sum: 1,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1997-03-20",
        sum: 2,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1997-03-20",
        sum: 3,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1997-03-20",
        sum: 4,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1997-03-20",
        sum: 5,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1997-03-20",
        sum: 6,
        zodiac: "Pisces",
        good: false,
      },
      {
        date: "1996-02-29",
        sum: null,
        zodiac: "Pisces",
        good: true,
      }
    ).it("should return correct shit", (done, value) => {
      chai
        .request(app)
        .post("/submit")
        .send({
          date: value.date,
          value: value.sum,
        })
        .end((err, res) => {
          expect(res.body.sign).to.be.equal(value.zodiac);
          let prediction = value.good
            ? predictions.good[value.date.endsWith("02-29") ? 1 : 0]
            : predictions.bad[value.sum];

          expect(res.body.data).to.be.equal(prediction);
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
