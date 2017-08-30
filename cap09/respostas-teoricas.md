# Respostas teóricas

## Exercício 1
Devemos usar o Vuex como uma persistência de estado da nossa aplicação, seu objetivo é armazenar estados, permitindo que compartilhemos dados entre diversos componentes. Devemos usa-lo quando possuímos dados que são manipulados em diversos componentes distintos.

## Exercício 2
As actions, são as formas indicadas para executar uma alteraçãode dados no Vuex, por si só, são disponibilizadas as mutações, porém devemos usar ações para executar mutações, mantendo o fluxo indicado pelo Vuex.

## Exercício 3
Quando possuímos ações, mutações, estados ou getters que se referem a um mesmo grupo de dados, podemos usar módulos para separa-lo dos demais, garantindo assim uma boa organizãção quando temos muitos dados para manipular.

## Exercício 4
Para eliminar o repetitivo acesso a store do Vuex, é possível usar o mapeamento de atributos, para isso é preciso instalar o pacote que disponilibiza o spread operator, assim se torna possível mapear qualquer coisa da loja, incorporando em seu componente.