import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app.routes';

registerLocaleData(localePt, 'pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [
    // Nível: Fácil | Responsável: Emanuele.
    // Orientação: preserve o locale pt-BR compartilhado pelos pipes de data e número.
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'md' }),
    provideRouter(routes),

    // TODO | Nível: Difícil | Responsável: Leno.
    // Tarefa: habilitar HttpClient para o service de exercícios.
    // Orientação: registre provideHttpClient() aqui e injete HttpClient no service.
  ],
};
