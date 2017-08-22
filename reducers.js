module.exports.checkLeapYear = function (state = {isLeap: false}, action) {
    if(action.year % 4 === 0){
      if(action.year % 100 === 0){
        return {isLeap: false};
      }
        return {isLeap: true};
    }
    return state;
};
