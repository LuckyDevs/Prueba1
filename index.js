// index.js
module.exports = function() {
  var data = { users: [] }
  // crear 1000 users
  for (var i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: 'user' + i })
  }
  return data
}