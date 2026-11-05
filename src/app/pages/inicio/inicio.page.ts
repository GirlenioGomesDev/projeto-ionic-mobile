import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

// Nível: Fácil | Responsável: Bianka.
// Tarefa: montar a Home com banner e atalhos.
// Orientação: use DatePipe para formatar o horário da próxima aula.
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './inicio.page.html',
})
export class InicioPage {}
