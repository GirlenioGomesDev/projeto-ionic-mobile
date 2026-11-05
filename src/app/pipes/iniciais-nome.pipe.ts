import { Pipe, PipeTransform } from '@angular/core';

// Nível: Médio | Responsável: Anita.
// TODO: gerar as iniciais para o avatar do Perfil.
// Orientação: use o primeiro e o último nome. Teste nome único,
// espaços extras e um texto vazio.
@Pipe({ name: 'iniciaisNome', standalone: true })
export class IniciaisNomePipe implements PipeTransform {
  transform(nome: string): string {
    return nome;
  }
}
