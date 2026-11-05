import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

// Nível: Médio | Responsável: Anita.
// TODO: representar um perfil fictício e seu status de plano.
// Orientação: importe IniciaisNomePipe e StatusPlanoDirective após implementá-los.
// Prepare exemplos com plano ativo e sem plano para testar os dois estados do @if.
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './perfil.page.html',
})
export class PerfilPage {}
