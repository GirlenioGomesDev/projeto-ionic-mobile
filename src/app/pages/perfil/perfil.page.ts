import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

// Nível: Médio | Responsável: Anita.
// Tarefa: montar o Perfil com @if, um pipe e uma diretiva personalizados.
// Orientação: use o pipe para gerar iniciais e a diretiva para destacar o status do plano.
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './perfil.page.html',
})
export class PerfilPage {}
