// @ts-check

import { DateTime, Interval } from "luxon";
import { Cpf } from "../campos/cpf.js";
import { NomeDePessoa } from "../campos/nome-de-pessoa.js";
import { DataDeNascimento } from "../campos/data-de-nascimento.js";

export class Paciente {

    #cpf;
    #nome;
    #dataDeNascimento;

    get cpf() {
        return this.#cpf.valor;
    }

    get nome() {
        return this.#nome.valor;
    }

    get dataDeNascimento() {
        return this.#dataDeNascimento.valor;
    }

    get idade() {
        const intervalo = Interval.fromDateTimes(
            DateTime.fromJSDate(this.#dataDeNascimento.valor).startOf('day'),
            DateTime.now().startOf('day')
        );
        const idade = intervalo.length('years');
        return Math.floor(idade);
    }

    /**
     * 
     * @param {Cpf} cpf 
     * @param {NomeDePessoa} nome 
     * @param {DataDeNascimento} dataDeNascimento 
     */
    constructor(cpf, nome, dataDeNascimento) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#dataDeNascimento = dataDeNascimento;
    }
}