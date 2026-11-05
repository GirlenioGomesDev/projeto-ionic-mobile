import { Pipe, PipeTransform } from '@angular/core';

// Nível: Médio | Responsável: Vinícius.
// TODO: transformar textos longos de avisos em uma prévia com reticências.
// Orientação: aceite um limite opcional e preserve textos que já cabem.
@Pipe({ name: 'resumoAviso', standalone: true })
export class ResumoAvisoPipe implements PipeTransform {
  transform(texto: string): string {
    return texto;
  }
}
