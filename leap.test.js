let {store} = require("./leap.js");
const {changeYear} = require("./actions.js");

test("a year that is not a leap year.", function () {
    store.dispatch(changeYear(2015));
    expect(store.getState().isLeap).toBe(false);
});
