
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

// ==========================================
// NÍVEL: DIFÍCIL
// RESPONSÁVEL: LENO
// Serviço de integração com a API wger
// ==========================================

// Estrutura de uma tradução
interface Traducao {
  language: number;
  name: string;
}

// Estrutura dos músculos
interface MusculoApi {
  id: number;
  name: string;
  name_en: string;
}

// Estrutura dos equipamentos
interface EquipamentoApi {
  id: number;
  name: string;
}

// Estrutura de um exercício
interface ExercicioApi {
  id: number;
  translations: Traducao[];
  muscles: MusculoApi[];
  equipment: EquipamentoApi[];
}

// Estrutura da resposta da API
interface RespostaApi<T> {
  count: number;
  results: T[];
}

@Injectable({
  providedIn: 'root'
})
export class ExerciciosApiService {

  // Endereço principal da API
  private apiUrl = 'https://wger.de/api/v2';

  // Armazena as respostas em memória
  private musculosCache$?: Observable<RespostaApi<MusculoApi>>;
  private equipamentosCache$?: Observable<RespostaApi<EquipamentoApi>>;

  constructor(private http: HttpClient) {}

  // ==========================================
  // GET 1 - EXERCÍCIOS
  // ==========================================

  // Busca exercícios em português com
  // pesquisa e paginação.
  getExercicios(busca: string = '', offset: number = 0) {

    let params = new HttpParams()
      .set('language__code', 'pt')
      .set('limit', '20')
      .set('offset', offset.toString());

    if (busca.trim()) {
      params = params.set('name__exact', busca.trim());
    }

    return this.http.get<RespostaApi<ExercicioApi>>(
      `${this.apiUrl}/exerciseinfo/`,
      { params }
    );
  }

  // ==========================================
  // GET 2 - MÚSCULOS COM CACHE
  // ==========================================

  getMusculos(): Observable<RespostaApi<MusculoApi>> {

    // Verifica se ainda não existe cache.
    if (!this.musculosCache$) {

      // Busca os músculos na API.
      this.musculosCache$ = this.http
        .get<RespostaApi<MusculoApi>>(
          `${this.apiUrl}/muscle/?limit=100`
        )
        .pipe(
          // Guarda e compartilha a última resposta.
          shareReplay(1)
        );
    }

    // Retorna a resposta armazenada.
    return this.musculosCache$;
  }

  // ==========================================
  // GET 3 - EQUIPAMENTOS COM CACHE
  // ==========================================

  getEquipamentos(): Observable<RespostaApi<EquipamentoApi>> {

    // Verifica se ainda não existe cache.
    if (!this.equipamentosCache$) {

      // Busca os equipamentos na API.
      this.equipamentosCache$ = this.http
        .get<RespostaApi<EquipamentoApi>>(
          `${this.apiUrl}/equipment/?limit=100`
        )
        .pipe(
          // Guarda e compartilha a última resposta.
          shareReplay(1)
        );
    }

    // Retorna a resposta armazenada.
    return this.equipamentosCache$;
  }

}
