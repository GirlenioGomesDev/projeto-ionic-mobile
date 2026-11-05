import { Directive } from '@angular/core';

// Nível: Médio | Responsável: Anita.
// TODO: diferenciar o selo de plano ativo do estado sem plano.
// Orientação: receba o status como input e use host para aplicar uma classe
// ao selo. Deixe o rótulo do status legível em ambos os estados.
@Directive({ selector: '[appStatusPlano]', standalone: true })
export class StatusPlanoDirective {}
