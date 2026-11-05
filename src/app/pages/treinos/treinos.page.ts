import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

// Nível: Difícil | Responsável: Leno.
// TODO: consumir ExerciciosApiService para listar exercícios e categorias.
// Orientação: mostre nome e grupo em cada cartão. Trate carregamento, lista vazia
// e erro. Alinhe com Gabriel o link de detalhes usando o id de exerciseinfo.
@Component({
  selector: 'app-treinos',
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, RouterLink],
  templateUrl: './treinos.page.html',
})
export class TreinosPage {}
