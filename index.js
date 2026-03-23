const { use } = require("react");

function createLoginTracker(userInfo) {
  let attemptCount = 0;
  return (passwordAttempt) => {
    attemptCount++;
    if (attemptCount <= 3) {
      if (passwordAttempt === userInfo.password) {
        return "Login successful"
      }
      else {
        return `Attempt ${attemptCount} : Login failed`
      }}
    else {
      return "Account locked due to too many failed login attempts"
  }}}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};