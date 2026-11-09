import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { Aula } from '../../models/agenda.model';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
  ],
  templateUrl: './detalhes.page.html',
})
export class DetalhesPage {
  private rota = inject(ActivatedRoute);
  private agenda = inject(AgendaService);

  aula: Aula | undefined;

  diasDaAula: string = '';

  ionViewWillEnter(): void {
    const idRecebido = this.rota.snapshot.paramMap.get('id');

    const id = Number(idRecebido);

    this.aula = this.agenda.buscarAulaPorId(id);

    this.diasDaAula = '';

    if (this.aula) {
      this.diasDaAula = this.aula.dias
        .map((numero) => this.agenda.buscarDia(numero)?.nome ?? '')
        .join(' e ');
    }
  }
}