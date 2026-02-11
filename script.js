// PROTOTYPE INHERITEANCE

// =======================================================================================

// let obj1 = {
    // item1 : 'apple',
// };
// console.log(obj1);
// let obj2 = {
    // item2 : 'stawberry',
    // __proto__: obj1,
    // __proto__: function sum (a, b) {
        // return a + b;
        // __proto__:  obj1,
    // }
// };
// console.log(obj2);
// let obj3 = {
//     item3 : 'guava',
//     __proto__:  obj2,
// };
// console.log(obj3, item1);
let obj = {
    name : 'saylani',
    city : 'karachi'
};
// obj.name = 'Smit';

// =======================================================================================
        // FREEZE

// Object.freeze(obj)
// obj.name = 'Smit';
obj.phone = '123456'
// console.log(obj);

// =======================================================================================
        // SEAL

Object.seal
obj.name = 'Apna Saylani'
console.log(obj);
