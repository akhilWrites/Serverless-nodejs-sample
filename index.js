'use strict';

module.exports.helloworld = event => {
  const randomNumber = parseInt(Math.random() * 10);
  console.log("The random generated integer is: ", randomNumber);
  return randomNumber;
};
