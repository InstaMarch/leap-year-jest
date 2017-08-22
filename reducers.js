module.exports.checkLeapYear = function (state = {
    isLeap: false
}, action) {
    if(action.year % 4 === 0){
        return {isLeap: true};
    }
    return state;
};
