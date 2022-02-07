# História

🔗 **Jira Card:** [card_title](card_link)

O objetivo principal (macro) deste `pull request`.

## Descrição

Descreva sucintamente o resumo das alterações ou bugs corrigidos. Liste qualquer dependência ou configuração adicional necessária para a execução do projeto.

## Mudanças de configurações

Adicione detalhes sobre quais configurações foram alteradas, adicionadas ou removidas.

## Tipo de alteração

Exclua as opções não relevantes.

- [ ] 🐛 Bug fix (alterações `non-breaking` que corrigem um problema)
- [ ] ✨ Nova Feature (alterações `non-breaking` que adicionam funcionalidades)
- [ ] 🚨 Breaking change (`fix` ou `feature` que pode fazer com que funcionalidades existentes, parem de funcionar)
- [ ] 📚 Esta alteração exige atualizações na documentação

## Browsers Testados

- [ ] Chrome
- [ ] Firefox
- [ ] Edge
- [ ] Safari

## Checklist de Qualidade de Código
Adicione o badge ![](https://img.shields.io/badge/-skip-red) caso o item do checklist não se aplique.

- [ ] O código segue os `padrões` do projeto.
- [ ] O código foi `revisado` antes da abertura do pull request.
- [ ] Eu adicionei comentários ao código, particularmente em trechos complexos da aplicação.
- [ ] Eu fiz as alterações necessárias na documentação do projeto.
- [ ] Eu garanti que a aplicação não possui `warnings` ou `errors` no console.
- [ ] A funcionalidade que eu escrevi possui testes.
- [ ] Todos os testes do projeto passam localmente após minhas alterações.
- [ ] Eu garanti `100%` de cobertura de testes no código adicionado/alterado.
- [ ] Eu testei o build local do `storybook` antes da abertura do pull request. `yarn storybook:build && serve storybook-static` 👉 how to install [serve](https://www.npmjs.com/package/serve)
- [ ] Eu testei o build local da `aplicação` antes da abertura do pull request. `yarn build && serve -s build-eud-staging`
- [ ] Eu testei o comportamento da funcionalidade em múltiplas resoluções.
- [ ] Eu testei o comportamento da funcionalidade no meu celular por meio do `túnel de rede`.
- [ ] Eu verifiquei o relatório do `SonarCloud` e garanti que o código não apresenta `codesmells`. Obs: Desconsiderar `falsos positivos`.
- [ ] Eu garanti que o código atingiu nota `A` em `Maintainability`, `Duplications` e `Security` no `SonarCloud`.
- [ ] Eu garanti que o código não possui `Bugs` no `SonarCloud`.

## Imagem da Interface

Exclua caso não se aplique.
