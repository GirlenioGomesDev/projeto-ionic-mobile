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

Os arquivos de cada tela ficam em `src/app/pages/` e têm comentários de orientação. Para os pipes personalizados, siga a adaptação descrita abaixo: ela substitui as sugestões antigas dos comentários de resumir avisos e gerar iniciais.

| Nível | Responsável | Tarefas para implementar |
| --- | --- | --- |
| Difícil | Leno | Montar Treinos e, quando o grupo escolher a API, seguir o guia em `src/app/services/exercicios-api.service.ts` para criar o service com três GETs. |
| Difícil | Gabriel | Montar a Grade com um service de agenda local. Criar Detalhes com ID pela rota para o ponto extra. |
| Médio | Vinícius | Montar a Timeline com `@for`, criar o pipe personalizado `prioridadeAviso` com regras de prazo e obrigatoriedade e uma diretiva personalizada para destacar avisos. |
| Médio | Anita | Montar o Perfil com `@if`, criar o pipe personalizado `situacaoPlano` com regras de bloqueio, vencimento e sessões restantes e uma diretiva personalizada para destacar o status do plano. |
| Fácil | Bianka | Montar a Home com banner, atalhos e `DatePipe` para o horário da próxima aula. |
| Fácil | Emanuele | Cuidar da navegação em `src/app/layout/` e do tema em `src/global.css`. Exibir um indicador de sessões na Home com `DecimalPipe`. |

Na apresentação, cada integrante mostra o que sua parte faz, onde está no código e onde aparece na tela.

## Adaptação dos pipes personalizados

Esta seção define o que será implementado. A atualização do README documenta o planejamento; os pipes e os campos necessários ainda devem ser criados e usados nas telas pelos responsáveis.

O requisito escrito pede quatro pipes: dois personalizados e dois built-in. Considerando o comentário do professor de que um pipe já existente não conta como personalizado, o grupo deve implementar duas transformações com regras próprias do Ritmo Fit, sem apresentar um pipe pronto ou apenas renomeado como criação do grupo.

| Responsável | Ideia anterior | O que será feito |
| --- | --- | --- |
| Vinícius | Pipe para resumir o texto dos avisos. | `PrioridadeAvisoPipe`, com nome de uso `prioridadeAviso`, para classificar o aviso a partir do prazo e da obrigatoriedade. |
| Anita | Pipe para gerar as iniciais do nome. | `SituacaoPlanoPipe`, com nome de uso `situacaoPlano`, para descrever a situação do plano a partir do bloqueio, vencimento e sessões restantes. |

### Vinícius — Timeline e prioridade do aviso

- Criar `src/app/pipes/prioridade-aviso.pipe.ts`.
- Incluir nos dados dos avisos os campos `prazo` (data e horário) e `obrigatorio` (booleano). Esses dados podem ser locais.
- Receber o aviso e uma data de referência (`agora`) como entradas do pipe.
- Implementar as regras nesta ordem:
  1. Prazo encerrado: retornar **Encerrado**.
  2. Aviso obrigatório com prazo nas próximas 24 horas: retornar **Urgente**.
  3. Aviso obrigatório com prazo maior que 24 horas: retornar **Atenção**.
  4. Demais avisos com prazo futuro: retornar **Informativo**.
- Tratar dados ausentes ou inválidos sem quebrar a tela.
- Exibir o resultado no cartão do aviso, por exemplo: `{{ aviso | prioridadeAviso:agora }}`.
- Manter a responsabilidade por `@for` e pela diretiva personalizada de destaque visual dos avisos.

### Anita — Perfil e situação do plano

- Criar `src/app/pipes/situacao-plano.pipe.ts`.
- Incluir nos dados do plano os campos `bloqueado` (booleano), `vencimento` (data e horário) e `sessoesRestantes` (número). Esses dados podem ser locais.
- Receber o plano e uma data de referência (`agora`) como entradas do pipe.
- Implementar as regras nesta ordem:
  1. Plano bloqueado: retornar **Plano bloqueado**.
  2. Vencimento anterior à data de referência: retornar **Plano vencido**.
  3. Sem sessões restantes: retornar **Sem sessões disponíveis**.
  4. Demais planos válidos: retornar **Plano ativo**.
- Tratar dados ausentes ou inválidos sem quebrar a tela.
- Exibir o resultado no Perfil, por exemplo: `{{ plano | situacaoPlano:agora }}`.
- Manter a responsabilidade por `@if` e pela diretiva personalizada de destaque visual do status.

### Implementação e demonstração

- Cada pipe personalizado deve ter sua própria classe com `@Pipe`, `standalone: true`, implementação de `PipeTransform` e método `transform` com as regras acima.
- Importar o pipe no componente standalone da página correspondente e usá-lo no HTML com `|`.
- O pipe transforma os dados em texto para exibição; a diretiva personalizada aplica o destaque visual. São implementações separadas.
- Na apresentação, demonstrar dados de entrada diferentes, explicar as condições no `transform` e mostrar o resultado mudando na tela.
- O método `.pipe()` usado pelo RxJS no service não conta como pipe Angular de template.

### Dois pipes built-in

Os built-in continuam como tarefas separadas dos dois personalizados:

| Responsável | Pipe do Angular | Uso previsto |
| --- | --- | --- |
| Bianka | `DatePipe`, usado no HTML como `date`. | Formatar data e horário da próxima aula na Home. |
| Emanuele | `DecimalPipe`, usado no HTML como `number`. | Formatar o indicador de sessões na Home. |

Ambos precisam ser importados e utilizados nas telas; apenas citá-los em comentários não atende ao requisito. Não serão contados como os dois personalizados.

A adaptação mantém as páginas, a navegação, a API, os services, as duas diretivas e a divisão dos integrantes. A mudança de planejamento fica concentrada nos dois pipes personalizados e nos dados que eles precisam receber.

Se a orientação do professor também proibir o uso dos built-in, será necessário esclarecer a diferença com o enunciado, que exige dois deles.
