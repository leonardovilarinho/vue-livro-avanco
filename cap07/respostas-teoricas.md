# Respostas teóricas

## Exercício 1
Reusar componentes nos dá o poder de deixar nosso código mais limpo, tendo maior facilidade nas manutenções, além de deixar um rastro de padrões, onde qualquer desenvolvedor o entenderá e poderá continuar o projeto.

## Exercício 2
Slots, pois o conteúdo recebido provavelmente será bem grande, por se tratar de código HTML, logo, o uso de slots facilita isso, pois com eles podemos alocar um espaço para receber qualquer tipo de código HTML.

## Exercício 3
Emit, pois o componente `Resultado` ouvirá a alteração de outro, logo existe uma comunicação entre componentes, que no VueJs fica em responsabilidade do método $emit.

## Exercício 4
Props, pois normalmente título e nome são variáveis comuns, que podem ou não vir de um banco de dados, logo, não é um código, mas sim uma string, então devemos trata-las como propriedades de um componente.

## Exercício 5
Mixins, pois são uma das opções para reaproveitar partes de componentes em outros, assim podemos facilmente extender os filtros, dados, etc do componente `Pessoa` para nosso gerente.