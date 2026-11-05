import { Routes } from '@angular/router';

// Nível: Fácil | Responsável: Emanuele.
// Orientação: mantenha os caminhos das abas alinhados aos botões da barra inferior.
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
        loadComponent: () => import('./pages/treinos/treinos.page').then((m) => m.TreinosPage),
      },
      // TODO | Difícil | Gabriel: adicione a rota de Detalhes com um parâmetro de ID.
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
