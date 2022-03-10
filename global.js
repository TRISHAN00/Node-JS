// console.log('hello world');
// console.log(__dirname);
// console.log(__filename);

// check the difference between global or window.

var a = 10;

function test() {
    console.log('I am the test');
}

console.log(global.a);
global.test()