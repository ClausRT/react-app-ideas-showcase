# Notas do desenvolvimento

A descrição completa e atualizada do projeto pode ser encontrada no README na pasta raiz deste projeto.

Essas serão minhas anotações incrementais do que eu usei, por que eu usei e quais foram minhas referencias. O objetivo primário dessas notas é para auxiliar o meu aprendizado e registrar minha evolução para eu mesmo lá na frente olhar, tirar dúvidas e visualizar meu progresso.

Admito que estou improvisando e não sei se este é a melhor forma de fazer isso.

## 01 — Base do projeto

### O que fiz

* Criei o projeto usando ```npx create-next-app```
* Apaguei alguns arquivos ou reduzi o código base
* Instalei e configurei todas as dependencias de desenvolvimento para eslin, typescript, prettier e etc

### A ideia

Criar uma base sólida, mas simples para o projeto. Configurando o VSCode para forçar seguir uma guia de estilo (escolhi a Standard, mas vi que muitos preferem o AirBnB) para o código, corrigindo erros quando possivel. Isso é muito importante pois eu ainda não sei como eu deveria estruturar um projeto usando React, Next e Typescript e se isso não me ajudar a criar um código melhor, ao menos me dá mais segurança. Então tendo efeito prático ou só blacebo, vamos de eslint + prettier.

### Referencias

* [How to set up TypeScript/ESLint/Prettier for Next.js](https://medium.com/@gogl.alex/how-to-set-up-typescript-eslint-prettier-for-next-gatsby-c5330b4a9b7a)
* [Start a Next.js project with TypeScript, Eslint and Prettier](https://paulintrognon.fr/blog/post/typescript-prettier-eslint-next-js)
* [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
* [Como inicio meus apps com ReactJS? Next.js, TypeScript, ESLint e Styled Components | Code/Drops #50](https://www.youtube.com/watch?v=1nVUfZg2dSA)
* [Essa issue](https://github.com/typescript-eslint/typescript-eslint/issues/2502) e [essa config.](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md)

## 02 - Showcase

Eu deveria ter dedicado mais tempo a entender o CSS. É um inferno fazer qualquer coisa. Na real eu deveria tirar um curso de designer pois eu nem faço ideia do que seria algo bonito ou não.

* [Paleta de cores escolhida](https://colorhunt.co/palette/206929)
* [Texto entre duas linhas de separação](https://stackoverflow.com/questions/23180372/how-to-make-some-text-between-two-lines)

## 03 - Descepção do primeiro app

Eu realmente mal dimensionei esse projeto inteiro, perdi muito tempo tentando quebrar a cabeça para implementar um visual simples e desisti pois eu realmente não tenho noção gráfica o suficiente ainda para fazer algo descente. Mantive algumas alterações básicas, mas removi boa parte das cores e *fancy stuff* que eu tava tentando implementar.

Parti para desenvolver um método de pegar dinamicamente cada app, criar um ```<Card />``` para cada um deles e carrega-los dentro da página inicial. Obviamente fracassei. Apaguei todos os placeholders e comecei a criar de fato os apps para depois pensar em como montara vitrine.

Ao tentar desenvolver o primeiro dele, [Bin2Dec]() eu me deparei com problemas de interpretação do parametros, problemas para a parte visual e de configuração do ESLint. Nenhuma dessas coisas são grandes problemas e eventualmente irei resolver tudo, mas preciso de bem mais tempo do que eu pensava inicialmente.

*Talvez* eu tenha lido e assistido vídeos de mais sobre os fundamentos de React e Next e a falta de por a mão na massa esteja me atrapalhando a desenvolver as soluções rápidamente. Mesmo eu tendo escrito as aplicações de exemplos a mão, acho que o fato de não ter sido eu que desenvolveu a lógica de funcionamento fez com que eu não desenferruja-se essa pericia. Justo a pericia mais importante desse oficio.

**E no fim lá vou eu de novo transformar a documentação de um projeto num diário de reclamações v.v**
