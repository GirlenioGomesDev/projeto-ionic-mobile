import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

// Nível: Difícil | Responsável: Gabriel.
// Tarefa: montar a Grade e criar um service para a agenda local.
// Orientação: deixe a tela com a exibição dos horários e o service com o armazenamento.
// Tarefa extra: criar Detalhes e receber o ID do exercício pela rota.
@Component({
  selector: 'app-grade',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './grade.page.html',
})
export class GradePage {}
