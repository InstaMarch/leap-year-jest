let {store} = require("./leap.js");
const {changeYear} = require("./actions.js");

test("a year that is not a leap year.", function () {
    store.dispatch(changeYear(2015));
    expect(store.getState().isLeap).toBe(false);
});

test("a year that is a normal leap year.", function () {
    store.dispatch(changeYear(2016));
    expect(store.getState().isLeap).toBe(true);
});

test("a normal leap year is skipped every 100 years.", function () {
    store.dispatch(changeYear(1900));
    expect(store.getState().isLeap).toBe(false);
});

test("a normal leap year is brought back every 400 years.", function (){
    store.dispatch(changeYear(2000));
    expect(store.getState().isLeap).toBe(true);
});
