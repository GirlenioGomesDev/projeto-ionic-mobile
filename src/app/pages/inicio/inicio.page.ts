import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IndicadoresComponent } from '../../components/indicadores/indicadores.component';

// Nível: Fácil | Responsável: Bianka.
// TODO: completar o banner, os atalhos e o card da próxima aula na Home.
// Orientação: crie uma data de exemplo e importe DatePipe de @angular/common
// nos imports da página para formatar a data e a hora no card.
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, RouterLink, IndicadoresComponent],
  templateUrl: './inicio.page.html',
  styleUrl: './inicio.page.css',
})
export class InicioPage {}
