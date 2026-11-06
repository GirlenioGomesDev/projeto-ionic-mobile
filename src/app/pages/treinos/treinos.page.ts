
import { Component, OnInit, OnDestroy } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButton
} from '@ionic/angular/standalone';

import { forkJoin, Subscription } from 'rxjs';

import { ExerciciosApiService } from '../../services/exercicios-api.service';

// ==================================================
// NÍVEL: DIFÍCIL
// RESPONSÁVEL: LENO
//
// FUNÇÕES:
// 1. Buscar exercícios na API wger.
// 2. Buscar músculos e equipamentos.
// 3. Traduzir os dados para português.
// 4. Exibir os exercícios na tela.
// 5. Permitir pesquisar exercícios.
// 6. Tratar erros e carregamento.
// 7. Implementar paginação.
// ==================================================

interface Treino {
  id: number;
  nome: string;
  musculos: string;
  equipamentos: string;
}

@Component({
  selector: 'app-treinos',
  standalone: true,

  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonButton
  ],

  templateUrl: './treinos.page.html',
  styleUrl: './treinos.page.css',
})

export class TreinosPage implements OnInit, OnDestroy {

  // ================================================
  // DADOS DA TELA
  // ================================================

  treinos: Treino[] = [];

  carregando = true;
  erro = '';

  busca = '';

  private requisicaoAtual?: Subscription;

  // ================================================
  // CONTROLE DA PAGINAÇÃO
  // ================================================

  // Página que o usuário está visualizando.
  paginaAtual = 1;

  // Quantos exercícios aparecem por página.
  itensPorPagina = 20;

  // Quantidade total informada pela API.
  totalExercicios = 0;

  // Calcula quantas páginas existem.
  get totalPaginas(): number {
    return Math.ceil(
      this.totalExercicios / this.itensPorPagina
    );
  }

  // Retorna os exercícios recebidos da API.
  get treinosFiltrados(): Treino[] {
    return this.treinos;
  }

  // ================================================
  // TRADUÇÃO DOS MÚSCULOS
  // ================================================

  private nomesMusculos: Record<number, string> = {
    1: 'Bíceps',
    2: 'Deltoide anterior',
    3: 'Serrátil anterior',
    4: 'Peitoral maior',
    5: 'Tríceps',
    6: 'Abdômen',
    7: 'Panturrilha',
    8: 'Glúteo máximo',
    9: 'Trapézio',
    10: 'Quadríceps',
    11: 'Posterior da coxa',
    12: 'Grande dorsal',
    13: 'Braquial',
    14: 'Oblíquo externo',
    15: 'Sóleo'
  };

  // ================================================
  // TRADUÇÃO DOS EQUIPAMENTOS
  // ================================================

  private nomesEquipamentos: Record<number, string> = {
    1: 'Barra',
    2: 'Barra EZ',
    3: 'Halteres',
    4: 'Colchonete',
    5: 'Bola suíça',
    6: 'Barra fixa',
    7: 'Peso corporal',
    8: 'Banco',
    9: 'Banco inclinado',
    10: 'Kettlebell',
    11: 'Faixa elástica',
    12: 'Máquina de cabos'
  };

  // ================================================
  // INJEÇÃO DE DEPENDÊNCIA
  // ================================================

  constructor(
    private api: ExerciciosApiService
  ) {}

  // Executado quando o componente é inicializado.
  ngOnInit(): void {
    this.carregarTreinos();
  }

  // ================================================
  // PESQUISA DE EXERCÍCIOS
  // ================================================

  atualizarBusca(
    valor: string | null | undefined
  ): void {

    // Guarda o texto pesquisado.
    this.busca = valor ?? '';

    // Toda nova pesquisa começa na página 1.
    this.paginaAtual = 1;

    // Busca os resultados na API.
    this.carregarTreinos();
  }

  // ================================================
  // CONSULTAS À API WGER
  // ================================================

  carregarTreinos(): void {

    // Ativa o estado de carregamento.
    this.carregando = true;

    // Limpa erros anteriores.
    this.erro = '';

    // Cancela a requisição anterior.
    this.requisicaoAtual?.unsubscribe();

    // Calcula quantos registros devem ser pulados.
    const offset =
      (this.paginaAtual - 1) * this.itensPorPagina;

    // Executa as três requisições GET.
    this.requisicaoAtual = forkJoin({

      exercicios: this.api.getExercicios(
        this.busca,
        offset
      ),

      musculos: this.api.getMusculos(),

      equipamentos: this.api.getEquipamentos()

    }).subscribe({

      // Executado quando as três requisições terminam.
      next: ({ exercicios, musculos, equipamentos }) => {

        // Atualiza o total de exercícios encontrados.
        this.totalExercicios = exercicios.count;

        // ==========================================
        // TRADUZIR OS MÚSCULOS
        // ==========================================

        const mapaMusculos = new Map(
          musculos.results.map(m => [
            m.id,
            this.nomesMusculos[m.id] ?? 'Músculo não traduzido'
          ] as const)
        );

        // ==========================================
        // TRADUZIR OS EQUIPAMENTOS
        // ==========================================

        const mapaEquipamentos = new Map(
          equipamentos.results.map(e => [
            e.id,
            this.nomesEquipamentos[e.id] ?? 'Equipamento não traduzido'
          ] as const)
        );

        // ==========================================
        // ORGANIZAR OS EXERCÍCIOS
        // ==========================================

        this.treinos = exercicios.results.flatMap(
          exercicio => {

            // Procura a tradução em português.
            const traducao = exercicio.translations.find(
              item => item.language === 7
            );

            // Ignora exercícios sem nome em português.
            if (!traducao?.name?.trim()) {
              return [];
            }

            return [{
              id: exercicio.id,

              nome: traducao.name,

              // Associa os músculos traduzidos.
              musculos: exercicio.muscles
                .map(m =>
                  mapaMusculos.get(m.id) ?? 'Não informado'
                )
                .join(', ') || 'Não informado',

              // Associa os equipamentos traduzidos.
              equipamentos: exercicio.equipment
                .map(e =>
                  mapaEquipamentos.get(e.id) ?? 'Não informado'
                )
                .join(', ') || 'Não informado'
            }];
          }
        );

        // Finaliza o carregamento.
        this.carregando = false;

      },

      // Tratamento de erros.
      error: (erro) => {

        console.error(
          'Erro ao carregar exercícios:',
          erro
        );

        this.erro =
          'Não foi possível carregar os exercícios.';

        this.carregando = false;
      }

    });
  }

  // ================================================
  // PAGINAÇÃO DOS EXERCÍCIOS
  // ================================================

  // Avança para a próxima página.
  proximaPagina(): void {

    if (this.carregando) {
      return;
    }

    // Verifica se existe próxima página.
    if (this.paginaAtual < this.totalPaginas) {

      // Incrementa a página.
      this.paginaAtual++;

      // Consulta os próximos exercícios.
      this.carregarTreinos();
    }
  }

  // Retorna para a página anterior.
  paginaAnterior(): void {

    if (this.carregando) {
      return;
    }

    // Não permite voltar antes da página 1.
    if (this.paginaAtual > 1) {

      // Diminui o número da página.
      this.paginaAtual--;

      // Consulta os exercícios anteriores.
      this.carregarTreinos();
    }
  }

  // ================================================
  // LIMPEZA DO COMPONENTE
  // ================================================

  ngOnDestroy(): void {

    // Cancela a requisição ativa quando
    // o componente é destruído.
    this.requisicaoAtual?.unsubscribe();
  }

}
