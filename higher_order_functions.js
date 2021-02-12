function repeat(operation, num) {
    for (let index = 0; index < num; index++) {
        operation();
        
    }
  }
  // Do not remove the line below
  module.exports = repeat