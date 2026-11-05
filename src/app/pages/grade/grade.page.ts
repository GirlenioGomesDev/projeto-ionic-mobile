import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

// Nível: Difícil | Responsável: Gabriel.
// TODO: criar uma grade com horários fictícios e conectá-la ao AgendaService.
// Orientação: diferencie “Horários” de “Minha agenda”. Permita guardar e retirar
// uma aula da agenda e confira se a seleção reaparece depois de recarregar.
@Component({
  selector: 'app-grade',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './grade.page.html',
})
export class GradePage {}
