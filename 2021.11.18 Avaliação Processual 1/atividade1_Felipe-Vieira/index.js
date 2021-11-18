"use strict";
exports.__esModule = true;
var input = require("readline-sync");
var nome = input.question('Insira seu nome: ');
var idade;
idade = parseInt(input.question('Insira sua idade: '));
console.log('Olá mundo de DEVs');
console.log('O nome digitado foi: ', nome);
console.log('A idade digitada foi: ', idade);
