const peoplenames = require("../country/state/city/index");
const firstName = require("../utilities/utils/index");

const getPeopleInCity = (peoplenames) => {
  return firstName(peoplenames);
};

module.exports = getPeopleInCity;
