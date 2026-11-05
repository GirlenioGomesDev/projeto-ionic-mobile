import { Component } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  barbellOutline,
  calendarOutline,
  homeOutline,
  newspaperOutline,
  personOutline,
} from 'ionicons/icons';

// Nível: Fácil | Responsável: Emanuele.
// Tarefa: revisar a barra de abas em telas estreitas durante a integração.
// Orientação: se trocar um ícone, registre-o aqui e use o mesmo nome no HTML.
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
  templateUrl: './tabs.page.html',
  styleUrl: './tabs.page.css',
})
export class TabsPage {
  constructor() {
    addIcons({ homeOutline, newspaperOutline, barbellOutline, calendarOutline, personOutline });
  }
}
