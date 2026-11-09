import { Injectable } from '@angular/core';
import { Aula, DiaSemana } from '../models/agenda.model';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private dias: DiaSemana[] = [
    {
      numero: 1,
      nome: 'Segunda-feira',
      abertura: '05:00',
      fechamento: '23:00',
    },
    {
      numero: 2,
      nome: 'Terça-feira',
      abertura: '05:00',
      fechamento: '23:00',
    },
    {
      numero: 3,
      nome: 'Quarta-feira',
      abertura: '05:00',
      fechamento: '23:00',
    },
    {
      numero: 4,
      nome: 'Quinta-feira',
      abertura: '05:00',
      fechamento: '23:00',
    },
    {
      numero: 5,
      nome: 'Sexta-feira',
      abertura: '05:00',
      fechamento: '23:00',
    },
    {
      numero: 6,
      nome: 'Sábado',
      abertura: '08:00',
      fechamento: '18:00',
    },
    {
      numero: 0,
      nome: 'Domingo',
      abertura: '08:00',
      fechamento: '14:00',
    },
  ];
 private aulas: Aula[] = [
    {
      id: 1,
      nome: 'Jiu-jitsu',
      dias: [2, 4],
      inicio: '19:30',
      fim: '20:30',
      local: 'Sala de lutas',
      descricao: 'Aula de jiu-jitsu com prática de técnicas e movimentos.',
    },
    {
      id: 2,
      nome: 'Pilates',
      dias: [5],
      inicio: '20:00',
      fim: '21:00',
      local: 'Sala de pilates',
      descricao: 'Aula com exercícios de controle corporal e mobilidade.',
    },
    {
      id: 3,
      nome: 'Treino funcional',
      dias: [1, 3],
      inicio: '07:00',
      fim: '08:00',
      local: 'Sala de atividades',
      descricao: 'Aula com exercícios variados de condicionamento físico.',
    },
    {
      id: 4,
      nome: 'Alongamento',
      dias: [6],
      inicio: '09:00',
      fim: '09:30',
      local: 'Sala de atividades',
      descricao: 'Aula com movimentos de alongamento e mobilidade.',
    },
  ];

  listarDias(): DiaSemana[] {
    return this.dias;
  }

  buscarDia(numero: number): DiaSemana | undefined {
    return this.dias.find((dia) => dia.numero === numero);
  }

  listarAulasPorDia(numero: number): Aula[] {
    return this.aulas
      .filter((aula) => aula.dias.includes(numero))
      .sort((a, b) => a.inicio.localeCompare(b.inicio));
  }

  buscarAulaPorId(id: number): Aula | undefined {
    return this.aulas.find((aula) => aula.id === id);
  }
}