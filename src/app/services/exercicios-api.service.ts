import { Injectable } from '@angular/core';

// Nível: Difícil | Responsável: Leno.
// TODO: implementar os três GETs da API pública wger com HttpClient.
// Orientação: use https://wger.de/api/v2 como base. Combine com Gabriel
// o nome e o tipo de buscarExercicio(id) para a integração com Detalhes.
@Injectable({ providedIn: 'root' })
export class ExerciciosApiService {
  // listarExercicios() → GET /exerciseinfo/?limit=12
  // buscarExercicio(id) → GET /exerciseinfo/{id}/
  // listarCategorias() → GET /exercisecategory/
  //
  // Modele os campos usados na tela. As listas retornam um objeto com results.
  // Em translations, procure o nome em português (language 7), depois em
  // inglês (language 2). Trate exercícios sem tradução para esses idiomas.
}
