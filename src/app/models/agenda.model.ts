export interface DiaSemana {
    numero: number;
    nome: string;
    abertura: string;
    fechamento: string;
}

export interface Aula {
    id: number
    nome: string;
    dias: number[];
    inicio: string;
    fim: string;
    local: string;
    descricao: string;

}