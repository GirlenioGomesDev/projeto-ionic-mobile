import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

// Nível: Fácil | Responsável: Emanuele.
// Tarefa: manter o contêiner principal e a navegação Ionic.
// Orientação: monte a barra inferior em layout/tabs.page.html.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  template: '<ion-app><ion-router-outlet /></ion-app>',
})
export class AppComponent {}
