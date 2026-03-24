

function createLoginTracker(userInfo) {
  let attemptCount = 0;
  return (passwordAttempt) => {
    attemptCount++;
    if (attemptCount <= 3) {
      if (passwordAttempt === userInfo.password) {
        return "Login successful"
      }
      else {
        return `Attempt ${attemptCount}: Login failed`
      }}
    else {
      return "Account locked due to too many failed login attempts"
  }}}


// const details = {
//   username : "Robert",
//   password : "password123",
// }
// const login = createLoginTracker(details)

// console.log(login("wrongpassword"))
// console.log(login("wrongpassword"))
// console.log(login("password123"))

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};