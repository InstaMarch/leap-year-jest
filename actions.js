const CHANGE_YEAR = "CHANGE_YEAR";

const changeYear = (year) => ({
    year,
    type: CHANGE_YEAR 
});

module.exports.changeYear = changeYear;
