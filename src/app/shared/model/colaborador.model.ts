import { Endereco } from "./endereco.model";

export interface Colaborador {
    id: number;
    nome: string;
    sobrenome: string;
    cargo: string;
    dataNascimento: string;
    endereco: Endereco
}