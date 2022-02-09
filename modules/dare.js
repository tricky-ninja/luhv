const responses = require("../files/responses");

module.exports = (response) => {
  const daresArray = responses.dare;
  const dare = daresArray[Math.floor(Math.random() * daresArray.length)];
  response(dare);
};
