import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

// Nível: Difícil | Responsável: Gabriel.
// TODO: receber o id da rota e buscar o exercício com ExerciciosApiService.
// Orientação: leia o parâmetro com ActivatedRoute.paramMap, valide um id inteiro
// positivo e trate um exercício inexistente. Teste também abrir a URL diretamente.
@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './detalhes.page.html',
})
export class DetalhesPage {}
