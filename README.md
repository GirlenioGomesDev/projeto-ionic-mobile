# Ritmo Fit

Base de um app acadêmico de academia em **Ionic 8 com Angular 20 standalone**. A referência visual das fotos aparece na barra inferior com cinco abas, nos destaques em vermelho e nos cartões arredondados. O nome e os exemplos de academia são fictícios.

As rotas e a estrutura visual já podem ser abertas. A implementação dos requisitos avaliados está marcada nos arquivos com `TODO`, nível, responsável e orientação.

## Rodar no computador

Use Node.js 24 ou Node.js 22.12+ na linha 22.

```bash
git clone https://github.com/GirlenioGomesDev/projeto-ionic-mobile.git
cd projeto-ionic-mobile
npm ci
npm start
```

Abra [http://localhost:4200](http://localhost:4200). Para conferir a compilação de produção, rode `npm run build`.

## Divisão das tarefas

Os caminhos abaixo são relativos a `src/app/`.

| Nível | Responsável | Parte 1 | Parte 2 |
| --- | --- | --- | --- |
| Difícil | **Leno** | Criar o service HTTP com os três GETs em `services/exercicios-api.service.ts` e registrar `provideHttpClient()` em `app.config.ts`. | Integrar a lista de exercícios e as categorias na aba Treinos, em `pages/treinos/`, e ligar os cartões à rota de detalhes. |
| Difícil | **Gabriel** | Criar a Grade e a Minha agenda em `pages/grade/`, com persistência local em `services/agenda.service.ts`. | Receber o ID e buscar os dados em `pages/detalhes/`. Alterar a rota de demonstração em `app.routes.ts` para `/treinos/:id`. |
| Médio | **Vinícius** | Montar a Timeline com avisos fictícios e renderizá-los com `@for` em `pages/timeline/`. | Criar e aplicar o pipe `resumoAviso` e a diretiva `appDestaqueAviso` na Timeline. |
| Médio | **Anita** | Montar o Perfil fictício e mostrar o estado do plano com `@if` em `pages/perfil/`. | Criar e aplicar o pipe `iniciaisNome` e a diretiva `appStatusPlano` no Perfil. |
| Fácil | **Bianka** | Finalizar o banner e os atalhos da Home em `pages/inicio/`. | Usar o pipe nativo `DatePipe` (`date`) no horário da próxima aula. |
| Fácil | **Emanuele** | Revisar a navegação em `layout/` e o tema em `src/global.css`. | Usar o pipe nativo `DecimalPipe` (`number`) no cartão de sessões em `components/indicadores/`. |

Cada integrante tem seus pontos de edição indicados nos arquivos. Na integração, Leno e Gabriel combinam o nome e o retorno de `buscarExercicio(id)`, além da troca do link temporário `/treinos/detalhes` por `/treinos/:id`. O cartão de sessões da Emanuele já está posicionado na Home da Bianka.

## API dos treinos

A [documentação da wger](https://wger.readthedocs.io/en/latest/api/api.html) descreve as consultas públicas. A base proposta é `https://wger.de/api/v2`.

| GET planejado | Uso em tela |
| --- | --- |
| `/exerciseinfo/?limit=12` | Mostrar o catálogo em Treinos. |
| `/exerciseinfo/{id}/` | Buscar o exercício escolhido para Detalhes. |
| `/exercisecategory/` | Carregar as categorias exibidas em Treinos. |

Para conferir o formato da resposta de detalhes, experimente [o exercício 9](https://wger.de/api/v2/exerciseinfo/9/). Nas listagens, os itens vêm em `results`. Use o `id` do exercício na rota. A agenda usa dados locais, mantidos pelo segundo service.

## Roteiro para a apresentação

Cada pessoa deve mostrar **o que seu requisito faz, onde está no código e onde aparece em tela**.

| Pessoa | O que demonstrar | Onde mostrar no código | Onde aparece em tela |
| --- | --- | --- | --- |
| Bianka | Entrada do app e formatação de data. | `inicio.page.ts` e `inicio.page.html`. | Início → atalhos e Próxima aula. |
| Emanuele | Navegação entre telas e formatação do número de sessões. | `app.routes.ts`, `tabs.page.html` e `indicadores.component.html`. | Barra inferior e Início → Sessões da unidade. |
| Vinícius | Repetição de avisos, resumo do texto e destaque de prioridade. | `timeline.page.html`, `pipes/resumo-aviso.pipe.ts` e `directives/destaque-aviso.directive.ts`. | Timeline → cartões comuns e prioritários. |
| Anita | Iniciais no avatar e exibição condicional do plano com destaque de status. | `perfil.page.html`, `pipes/iniciais-nome.pipe.ts` e `directives/status-plano.directive.ts`. | Perfil → avatar e Meu plano. |
| Leno | Três GETs centralizados no service HTTP e consumo do catálogo. | `exercicios-api.service.ts` e `treinos.page.ts`. | Treinos → lista e categorias. O GET por ID aparece ao abrir Detalhes. |
| Gabriel | Agenda que persiste após recarregar e envio de ID pela rota para o ponto extra. | `agenda.service.ts`, `app.routes.ts`, `detalhes.page.ts` e o link em `treinos.page.html`. | Grade → Minha agenda. Treinos → Detalhes de dois exercícios diferentes. |

## Conferência antes da entrega final

- [ ] Início e pelo menos três outras páginas estão funcionais e estilizadas.
- [ ] Os três GETs funcionam e a tela Treinos exibe dados da API.
- [ ] Os dois services têm funções distintas, com HTTP no catálogo e persistência local na agenda.
- [ ] Os dois pipes personalizados e os dois nativos aparecem nas telas.
- [ ] As duas diretivas personalizadas, o `@if` e o `@for` aparecem nas telas.
- [ ] Um exercício selecionado abre Detalhes pelo ID da rota para o ponto extra.
- [ ] O grupo testou a execução em um computador do laboratório e ensaiou a demonstração.
- [ ] Um integrante postou a versão final no GitHub e enviou o ZIP dos arquivos do projeto pelo Teams.
