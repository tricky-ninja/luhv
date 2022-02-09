const responses = require("../files/responses");

module.exports = (response) => {
  const truthsArray = responses.truth;
  const truth = truthsArray[Math.floor(Math.random() * truthsArray.length)];
  response(truth);
};
