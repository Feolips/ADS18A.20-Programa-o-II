"use strict";
// INTRODUÇÃO AO TYPESCRIPT - WEB API COM EXPRESS
// ENTRY POINT - index.ts (compilando para -> index.js)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as express from 'express';
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index")); // ou './routes/index'
const app = (0, express_1.default)();
// O express.json() é um middleware do express que converte
// o body (corpo, req.body) de requisições POST ou PUT no
// formato JSON a ser tratado pela API.
app.use(express_1.default.json());
app.use(index_1.default);
app.listen(3000, () => {
    console.log('*** API INICIADA NA PORTA 3000***');
    console.log('*** PRESSIONE CTRL+C PARA FINALIZAR ***');
});
