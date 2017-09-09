// create-fake-users.js
var faker = require('faker');module.exports = function() {
  var data = { users: [] }
  // Create 1000 users
  for (var i = 1; i <= 50; i++) {
    var randomCard = faker.helpers.userCard(); // userCard con muchas propiedades
    randomCard.id = i;
    data.users.push(randomCard);
  }
  return data;
}