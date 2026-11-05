import { Directive } from '@angular/core';

// Nível: Médio | Responsável: Vinícius.
// TODO: destacar um aviso quando a prioridade estiver ativa.
// Orientação: receba a prioridade como input e use host para alternar
// uma classe no cartão. Mostre um rótulo de prioridade junto à cor.
@Directive({ selector: '[appDestaqueAviso]', standalone: true })
export class DestaqueAvisoDirective {}
