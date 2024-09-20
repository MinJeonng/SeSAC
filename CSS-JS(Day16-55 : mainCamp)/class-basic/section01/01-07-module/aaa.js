import fruit, { apple, banana } from './bbb.js';

console.log('apple:', apple);
console.log('apple:', banana);
console.log(fruit);

//이렇게 한번에 가져올 수 있음
import * as bag from './bbb.js';

console.log('bag:', bag);
console.log('apple', bag.apple);
console.log('banana', bag.banana);
console.log('orange', bag.default);
