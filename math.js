const sub = (a, b) => a + b;
const div = (a, b) => a / b;
const test = (a, b) => sub() / div()


module.exports = {
    sub,
    div,
    test
}

console.log(module);