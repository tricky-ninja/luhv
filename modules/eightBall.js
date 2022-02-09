const responses = require('../files/responses');

module.exports = (response) => {
  const answersArray = responses.eightBall;
  const answer = answersArray[Math.floor(Math.random() * answersArray.length)];
  response(answer);
}