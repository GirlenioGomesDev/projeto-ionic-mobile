import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

// Nível: Difícil | Responsável: Leno.
// Tarefa: montar a lista de Treinos e implementar os três GETs após o grupo escolher a API.
// Orientação: siga o guia em ../../services/exercicios-api.service.ts e
// combine com Gabriel o ID usado em Detalhes.
@Component({
  selector: 'app-treinos',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './treinos.page.html',
})
export class TreinosPage {}
