let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);

let c = 12.5555;

console.log(Number.parseInt(c)); //converte para número inteiro
console.log(parseInt(c)); //converte para número inteiro

let d = '12.4545564455';

console.log(Number.parseFloat(d)); // converte para número decimal
console.log(parseFloat(d));  // converte para número decimal

console.log(Number.MAX_VALUE); // mostra o maior valor que a linguagem javascript aceita
console.log(Number.MAX_VALUE); // mostra o menor valor que a linguagem javascript aceita
console.log(Number.NaN);

console.log(Number.MAX_SAFE_INTEGER); // mostra o maior valor inteiro que a linguagem javascript aceita
console.log(Number.MIN_SAFE_INTEGER); // mostra o menor valor inteiro que a linguagem javascript aceita

console.log(7.14555455445.toFixed(2)); // mostra apenas os dois primeiros números depois da vírgula
console.log(7.155515215.toPrecision(2)); // arredonda o múmero para duas casas decimais