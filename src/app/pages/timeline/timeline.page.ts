import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

// Nível: Médio | Responsável: Vinícius.
// TODO: criar avisos fictícios com id, título, texto e prioridade.
// Orientação: importe ResumoAvisoPipe e DestaqueAvisoDirective após implementá-los.
// No HTML, renderize os avisos com @for e use o id no track.
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './timeline.page.html',
})
export class TimelinePage {}
