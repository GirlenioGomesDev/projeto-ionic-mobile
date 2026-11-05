# Ritmo Fit

Esqueleto de um app de academia em Ionic com Angular standalone. A base tem cinco telas com espaço para o conteúdo, uma barra de abas e estilos básicos.

## Rodar

Abra a pasta do projeto com Node.js 24 instalado.

```bash
npm ci
npm start
```

Acesse [http://localhost:4200](http://localhost:4200).

## Tarefas do grupo

Os arquivos de cada tela ficam em `src/app/pages/` e têm comentários de orientação.

| Nível | Responsável | Tarefas para implementar |
| --- | --- | --- |
| Difícil | Leno | Montar Treinos e, quando o grupo escolher a API, seguir o guia em `src/app/services/exercicios-api.service.ts` para criar o service com três GETs. |
| Difícil | Gabriel | Montar a Grade com um service de agenda local. Criar Detalhes com ID pela rota para o ponto extra. |
| Médio | Vinícius | Montar a Timeline com `@for`, um pipe e uma diretiva personalizados. |
| Médio | Anita | Montar o Perfil com `@if`, um pipe e uma diretiva personalizados. |
| Fácil | Bianka | Montar a Home com banner, atalhos e `DatePipe` para o horário da próxima aula. |
| Fácil | Emanuele | Cuidar da navegação em `src/app/layout/` e do tema em `src/global.css`. Exibir um indicador de sessões na Home com `DecimalPipe`. |

Na apresentação, cada integrante mostra o que sua parte faz, onde está no código e onde aparece na tela.
