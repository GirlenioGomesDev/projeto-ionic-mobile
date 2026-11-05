// Base do projeto Ionic com Angular standalone.
// Nível: Fácil | Responsável pela estrutura comum: Emanuele.
// Orientação: mantenha os providers da aplicação em app.config.ts.
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch(console.error);
