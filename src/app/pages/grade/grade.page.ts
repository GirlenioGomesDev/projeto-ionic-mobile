import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,

} from '@ionic/angular/standalone'

// Montação de Grade e criação de um service para a agenda local.
// Orientação: deixe a tela com a exibição dos horários e o service com o armazenamento.
// Tarefa extra: criar Detalhes e receber o ID do exercício pela rota.
import { Aula, DiaSemana } from '../../models/agenda.model';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-grade',
  standalone: true,
  imports: [RouterLink, IonContent, IonHeader, IonItem, IonTitle, IonToolbar, IonLabel, IonList, IonSelect, IonSelectOption],
  templateUrl: './grade.page.html',
})
export class GradePage {
  private agenda = inject(AgendaService);

  dias: DiaSemana[] = this.agenda.listarDias();
  diaSelecionado: number = new Date().getDay();
  funcionamento: DiaSemana | undefined;

  aulas: Aula[] = [];

  ionViewWillEnter(): void {
    this.carregarDia();

  }
  selecionarDia(numero: number): void {
    this.diaSelecionado = numero;
    this.carregarDia();

  }
  private carregarDia(): void {
    this.funcionamento = this.agenda.buscarDia(this.diaSelecionado);

    this.aulas = this.agenda.listarAulasPorDia(this.diaSelecionado);
  }
}
