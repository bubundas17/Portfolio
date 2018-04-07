const sha512 = require("crypto-js/sha512");
const md5 = require("crypto-js/md5");

module.exports = {

  // Random Salt Generator
  createSalt() {
    let length = 35,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  },

  // Password Hashing Algorithm
  hashPassword(password, salt) {
    const sha256pass = sha512(password + salt).toString();
    const md5pass = md5(salt + password).toString();
    // returning super secure hashed password
    return sha512(sha256pass + salt).toString().slice(0, -6)
      + sha512(md5pass + salt).toString().slice(0, -5)
      + sha512(sha256pass + md5pass).toString().slice(0, -8);
  },

  // Checking Password from Database
  checkPassword(clearPassword, hashedPassword, salt) {
    return this.hashPassword(clearPassword, salt) === hashedPassword;
  }
};
