let o1 = {};
let o2 = new Object();

console.log(o1);
console.log(o2);

o1.nome = ("Matheus");
o2.nome = ("João");

console.log(o1.valueof());
console.log(o2.valueOf());

console.log(o1.toString());
console,log(o2.toString());