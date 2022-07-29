<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma}<p>
</h1>
<p align="center">
<img src="public/imagens/logoProjeto.jpg" width="350" height="300"/>
</p>
<br>


<br>
<br>

<!--ts-->

- [💻 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Descrição da API Psic.connect](#-descrição-da-api-psicconnect)
- [🔗 Apresentação do Projeto](#-apresentação-do-projeto)
- [⚙️ Funcionalidades/Objetivos](#️-funcionalidadesobjetivos)
- [📚 Aprendizados](#-aprendizados)
- [🛠️ Tecnologias utilizadas](#️-tecnologias-utilizadas)
- [🛠️ Pacotes Utilizados](#️-pacotes-utilizados)
- [💻 Instalação](#-instalação)
- [📁 Arquitetura MVC](#-arquitetura-mvc)
- [🔃 Rotas](#-rotas)
- [🔃 Retorna a documentação no swagger:](#-retorna-a-documentação-no-swagger)
- [🔃 Retorna teste com apresentação:](#-retorna-teste-com-apresentação)
- [🔃 Manipulação das Rotas de Cadastro e Login dos usuários *Pacient* ou *Volunteer*](#-manipulação-das-rotas-de-cadastro-e-login-dos-usuários-pacient-ou-volunteer)
- [🔃 Manipulação das Rotas para o login do usuário **Pacient** :](#-manipulação-das-rotas-para-o-login-do-usuário-pacient-)
- [🔃 Manipulação das Rotas para o login do usuário **Volunteer** :](#-manipulação-das-rotas-para-o-login-do-usuário-volunteer-)


<!--te-->

<br>
<br>


## 💻 Sobre o Projeto 

<br>

 API desenvolvida como Projeto Final com o auxílio da professora Mayhhara Morais para a conclusão do curso de Backend  [{Reprograma}](https://reprograma.com.br/)

<p align="justify">Refletindo a psicologia como esse instrumento de transformação que observa fatores subjetivos, emocionais, históricos e das condições de vida dos sujeitos como determinantes dos quadros de saúde da população. E também em como foi exorbitante a explosão da demanda por saúde mental somatizada a um grande processo de empobrecimento da população brasileira, na atualidade. 

<p align="justify"> Pensando então de que forma tornar mais acessível o atendimento psicológico para a comunidade, nasceu a ideia dessa API [ Psic.connect ] que tem como objetivo principal o de conectar pessoas em situação de vulnerabilidade sócio-econômica com psicólogos que se dispõem a atender voluntariamente essas pessoas, de forma solidária.

<p align="justify">Com o pensamento no futuro próximo de tornar-se um projeto grande e viável para a criação de um espaço seguro, que essas pessoas em situação de vulnerabilidade social possam ter o acompanhamento psicológico adequado, além de algumas implementações futuras como implatação do código de Front-end.

 
<br><br>

## 🚀 Descrição da API Psic.connect

<br>

<p align="justify">Nossa API, irá consistir em dois cadastros diferentes, o de paciente e o de psicólogo ( usuários: Pacient ou Volunteer) , e ao fazer login( passando por uma autenticação via Token)  o paciente terá acesso a uma lista de psicólogos cadastrados disponíveis, e ao fazer login o psicólogo poderá pesquisar por pacientes cadastrados, estabelecendo contato entre os dois lados por meio de email/número de contato. Também podendo, ao fazer login atualizar os seus dados de cadastro(como por exemplo atualizar o campo de disponibilidade de horários/dias), além de deletar seu cadastro da plataforma.

<p align="justify">A interface é um CRUD completo integrado com o banco de dados, onde é possível listar os usuários, tanto que precisam de tratamento e psicólogos que possam proporcionar este acompanhamento de forma voluntária, cadastrar novos usuários, atualizar os dados e deletar o cadastro do usuário. Tudo isso passando por uma autenticação, gerando um token que permite ou não o acesso as pessoas que estarão no sistema.


  
<br>

## 🔗 Apresentação do Projeto

- [Psic.connect](https://www.canva.com/design/DAFHpespaR0/ZSXNrzcxHuYte34kj9X0rw/edit)

<br>


## ⚙️ Funcionalidades/Objetivos

- [x] O schema do Pacient deve possuir os seguintes campos: id (autogerado), nome, idade, estado, identidade de gênero, etnia, renda média mensal (medido por salário mínimo), email, número de contato, ocupação, disponibilidade, se já está em atendimento e resumo descritivo da motivação para busca de tratamento psicológico;
- [x] O schema do Volunteer deve possuir os seguintes campos: id (autogerado), nome, idade, estado, identidade de gênero, etnia, CRP, email, número de contato, disponibilidade, se ainda está disponível e resumo sobre sua experiência clínica;
- [x] A API deve permitir o cadastro de usuários Pacient e Volunteer;
- [x] A API deve permitir a visualização das listas de Pacients e Volunteer disponíveis
- [x] A API deve permitir atualização de dados nos dois tipos de cadastros;
- [x] A API deve permitir a exclusão de cadastro dos Pacient e Volunteer do banco de dados.
- [x] Criação de usuário e login para o usuário Pacient com acesso a lista de psicólogos cadastrados com status disponível ;
- [x] Criação de usuário e login para o usuário Volunteer com acesso a lista de pessoas cadastradas no aguardo de atendimento. E acesso privado à dados de triagem dos pacientes
<br>

## 📚 Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DELETAR). 

<br>

## 🛠️ Tecnologias utilizadas 

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

<br>

## 🛠️ Pacotes Utilizados 

<br>

Para o desenvolvimento da API, as seguintes bibliotecas foram necessárias:

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [Eslint](https://www.npmjs.com/package/eslint)
- [Jest](https://www.npmjs.com/package/jest)

<br>

## 💻 Instalação

<br>

```bash
# Clonar o repositório
$ git clone https://github.com/beatriz-a-ndrade/psic-connect-api

# Entrar na pasta do repositório
$ cd psic-connect-api

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start

```
</br>

##  📁 Arquitetura MVC

</br>

```
 📁PSIC-CONNECT-API
   |
   |--📁public\imagens
   |   |- 📄 logoProjeto.jpg
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||--📁 controller
   |  |    |- 📄 pacientController.js
   |  |    |- 📄 volunteerController.js   
   |  |    |- 📄 autenticacao.js
   |  |    
   |  ||--📁 database
   |  |    |- 📄 mongooseConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 pacientModel.js
   |  |    |- 📄 volunteerModel.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 index.js
   |  |    |- 📄 pacientRoutes.js
   |  |    |- 📄 volunteerRoutes.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |  |--📁 test
   |  |   |- 📄 pacient.test.js
   |  |   |- 📄 volunteer.test.js
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .eslintrc.json
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

```
</br>

## 🔃 Rotas

* local: http://localhost:8080

* Heroku: https://xxxxxxx.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## 🔃 Retorna a documentação no swagger: 
    
Swagger - Heroku: 

| Método HTTP  | Endpoint                            | Descrição                            |
| ------------ | ----------------------------------- | ------------------------------------ |
| GET          | `http://localhost:8080/rota-doc-psicconnect-api`    |  documentação  swagger               |        

<br>

## 🔃 Retorna teste com apresentação: 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:8080/`     |  Mensagem de apresentação (Index)    |             |

<br>


## 🔃 Manipulação das Rotas de Cadastro e Login dos usuários *Pacient* ou *Volunteer*

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| POST          | `/pacient/create`                | Cadastra novo usuário Pacient            |
| POST          | `/pacient/login`        | Realiza o login Pacient com email e senha               |
| POST         | `/volunteer/create`         | Cria/cadastra um novo usuário Volunteer        |
| POST          | `/volunteer/login`     | Realiza o login Volunteer com CRP e senha     |

<br>

## 🔃 Manipulação das Rotas para o login do usuário **Pacient** :

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/volunteer/list`                | Retorna lista de todos profissionais da psicologia cadastrados no banco de dados             |
| GET          | `/volunteer/list/on`                | Retorna todos psicólogos voluntários cadastrados que estão disponíveis para atendimento           |
| GET          | `/volunteer/find/:id`                | Retorna todos dados de cadastro de um voluntário em específico            |
| PATCH         | `/pacient/update/:id`        | Atualiza/modifica dados específicos do cadastro Pacient              |
| DELETE       | `/pacient/delete/:id`     | Deleta um usuário Pacient do sistema         |

<br>


## 🔃 Manipulação das Rotas para o login do usuário **Volunteer** :

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/pacient/list`                | Retorna lista de todos cadastrados como usuário pacient no banco de dados      |
| GET          | `/pacient/list/on`                | Retorna lista de todos pacientes que ainda não conseguiram iniciar o acompanhamento com algum psicólogo cadastrado no sistema             |
| GET         | `/pacient/triage/:id`        | Retorna informações pessoais e sensíveis dos pacientes que possam contribuir em um processo de triagem por parte do Psicólogo *( Rota segura )*              |
| PATCH         | `/volunteer/update/:id`        | Atualiza/modifica dados específicos do cadastro Volunteer
| DELETE       | `/volunteer/delete/:id`     | Deleta um usuário Volunteer do sistema         |

<br>








