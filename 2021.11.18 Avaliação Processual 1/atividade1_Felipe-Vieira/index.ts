import * as input from 'readline-sync';

let nome:string = input.question('Insira seu nome: ');
let idade: number;
idade = parseInt(input.question('Insira sua idade: '));

console.log('Olá mundo de DEVs');
console.log('O nome digitado foi: ', nome);
console.log('A idade digitada foi: ', idade);

