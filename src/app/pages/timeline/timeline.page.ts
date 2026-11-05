import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

// Nível: Médio | Responsável: Vinícius.
// Tarefa: montar a Timeline com @for, um pipe e uma diretiva personalizados.
// Orientação: use o pipe para resumir avisos e a diretiva para destacar os prioritários.
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './timeline.page.html',
})
export class TimelinePage {}
