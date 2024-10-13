
//import {msg, hello as greating, test} from "./library.mjs";

// console.log(msg)
// greating('Rocky')
// new test();




import * as imp from "./library.mjs"
console.log(imp.msg)
imp.hello('Rocky')
new imp.test();