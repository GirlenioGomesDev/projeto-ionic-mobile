import { Routes } from '@angular/router';

// Nível: Fácil | Responsável pela navegação principal: Emanuele.
// Orientação: mantenha os caminhos das cinco abas alinhados aos botões da barra inferior.
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/tabs.page').then((m) => m.TabsPage),
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
        path: 'inicio',
        loadComponent: () => import('./pages/inicio/inicio.page').then((m) => m.InicioPage),
      },
      {
        path: 'timeline',
        loadComponent: () =>
          import('./pages/timeline/timeline.page').then((m) => m.TimelinePage),
      },
      {
        path: 'treinos',
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import('./pages/treinos/treinos.page').then((m) => m.TreinosPage),
          },
          {
            // TODO | Nível: Difícil | Responsável: Gabriel.
            // Tarefa: trocar esta rota de demonstração por :id.
            // Orientação: combine a mudança com Leno, que mantém o link na lista.
            path: 'detalhes',
            loadComponent: () =>
              import('./pages/detalhes/detalhes.page').then((m) => m.DetalhesPage),
          },
        ],
      },
      {
        path: 'grade',
        loadComponent: () => import('./pages/grade/grade.page').then((m) => m.GradePage),
      },
      {
        path: 'perfil',
        loadComponent: () => import('./pages/perfil/perfil.page').then((m) => m.PerfilPage),
      },
    ],
  },
  { path: '**', redirectTo: 'inicio' },
];
