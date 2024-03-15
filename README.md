
# PROJETO: "AO REDOR DOS EUA"

O projeto "Ao redor dos EUA" (referentes as Sprints de 5 a 10) do curso de "Desenvolvedor Web" da TripleTen consistiu na criação de uma página web onde os usuários podem adicionar, remover e curtir fotos, bem como editar informações e o avatar de seu perfil. 

## Funcionalidades

A responsividade foi criada com as técnicas aprendidas na Sprint anterior, como a definição de larguras em porcentagem e o midia querry (especificamente voltados para telas e cada um definindo uma altura máxima). Foi utilizado pela primeira vez o JavaScript para criação das seguintes funcionalidades: 



-Adicionar botões para fechamento e abertura dos popups da página;

-Botões para salvar as alterações dos inputs do formulário e devolve-los a página principal;

-Botão para excluir o cartão da página e botão para "curtir" a imagem;

-Adicionar os seis cartões iniciais da página, bem como criar novos cartões;

-Abrir um popup com a imagem do cartão em seu tamanho original;

-Fechar os popups clicando em qualquer área fora dos formulários ou apertando a tecla "ESC" do teclado;

-Validação dos formulários e customização das mensagens de erro;

-Adoção da orientação para objetos na criação de Classes;

-Utilização de módulos e as instruções "import" e "export" ;

-Implementação de Webpack;

-Criação de uma classe API e conexão do projeto com o servidor;

*Observação: Para o posicionamento dos demais itens da página, foram utilizados layout em "grid" com propriedades de áreas e Flexbox.


## Stack utilizada

**Front-end:** HTML, CSS, BEM, JavaScrip (POO).







## Uso/Exemplos

```javascript
api
  .getUserInfo()
  .then(({ name, about, avatar }) => {
    userInfo.setUserInfo(name, about, avatar);
  })
  .catch((err) => {
    console.log(err);
  });

```


## Demonstração

O site pode ser acessado através do [link](https://vinib96.github.io/web_project_around/).
## Roadmap:

Futuramente será possível utilizar o React.js para melhoria da interface.

## Apêndice

O design utilizado está disponível no [Figma](https://www.figma.com/file/e0lUDoBuWEsFCJ9OQKHypo/Web_Brief_Sprint_5_PT-%7C-Ao-redor-dos-EUA.-%7C-desktop-%2B-mobile?type=design&node-id=0-1&t=KyUBYZhXDZZEHVx0-0).



  <img src="https://miro.medium.com/v2/resize:fit:679/1*i8-u-V8LTTbQwTeUwLI_BQ.gif" />

