const horrorscopes = require("./horrorscopes.json");
const signs = require("./signs.json");

const SingleDay = 1000 * 60 * 60 * 24;

function isLeapYear(date) {
  let year = date.getFullYear();

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
    } else {
      return true;
    }
  }

  return false;
}

function getHoroscope(value, date) {
  if (isLeapYear(date)) {
    if (date.getMonth() === 1 && date.getDate() === 29) {
      return horrorscopes.good[1];
    }
    return horrorscopes.good[0];
  }

  return horrorscopes.bad[value];
}

function getDayOfYear(date) {
  let start = new Date(date.getFullYear(), 0, 0);
  let diff = date - start;

  return Math.floor(diff / SingleDay);
}

function getSign(date) {
  let isLeap = isLeapYear(date);
  let fromKey = "from" + (isLeap ? "" : "_leap");
  let toKey = "to" + (isLeap ? "" : "_leap");
  let dayOfYear = getDayOfYear(date);

  let sign = signs.find(
    (sign) => dayOfYear >= sign[fromKey] && dayOfYear <= sign[toKey]
  );

  if (sign !== null || sign !== undefined) {
    return sign.sign;
  }

  sign = sign.find((sign) => sign.sign === "Capricorn");

  return sign.sign;
}

module.exports = {
  isLeapYear: isLeapYear,
  getHoroscope: getHoroscope,
  getSign: getSign,
  getDayOfYear: getDayOfYear,
};
