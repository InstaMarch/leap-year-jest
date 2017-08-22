const {createStore} = require("redux");
const {checkLeapYear} = require("./reducers");

let store = createStore(checkLeapYear);
module.exports.store = store;

