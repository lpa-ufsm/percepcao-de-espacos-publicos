# Pesquisa de Percepção de espaços públicos

## Laboratório de Psicologia Ambiental

https://www.ufsm.br/grupos/lpa/


## Tutorial de edição de Pesquisas

### Como editar os ambiente

Abra o arquivo:

https://github.com/lpa-ufsm/percepcao-de-espacos-publicos/edit/main/src/assets/ambients.json

Cada ambiente deve conter:

* `id` - Valor numérico sequencial 
* `title` - Descrição da pesquisa,
* `iFrameUrl` - URL pública que possa ser aprensendada _embedded_ 
* `formUrl` - URL do formulário do Google

A URL do formulário do Google deve ter sido gerada com a opção de [respostas preenchidas automaticamente](https://support.google.com/a/users/answer/9308781?hl=pt) com os valores: `name`, `age` e `specialty`.

Antes de enviar valide o json completo usando esse site:

https://jsonlint.com/

Realize o _commit_ da alteração e aguarde a publicação automática.

Abre a paǵina em janela anônima para garantir que não esteja acessando com _cache_:

https://lpa-ufsm.github.io/percepcao-de-espacos-publicos/
