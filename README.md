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
<p align="center">

### :blueheart: Aplicação disponível [aqui](https://psic-connet-api.herokuapp.com/)

<br>
<p>


<!--ts-->

- [💻 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Descrição API - Psic.connect](#-descrição-api---psicconnect)
- [🔗 Apresentação do Projeto](#-apresentação-do-projeto)
- [⚙️ Funcionalidades/Objetivos](#️-funcionalidadesobjetivos)
- [📚 Aprendizados](#-aprendizados)
- [🛠️ Tecnologias utilizadas](#️-tecnologias-utilizadas)
- [🛠️ Pacotes Utilizados](#️-pacotes-utilizados)
- [💻 Instalação](#-instalação)
- [📁 Arquitetura MVC](#-arquitetura-mvc)
- [🔃 Rotas](#-rotas)
  - [🔃 Retorna a documentação no swagger :](#-retorna-a-documentação-no-swagger-)
  - [Swagger - Heroku :](#swagger---heroku-)
  - [🔃 Retorna teste com apresentação:](#-retorna-teste-com-apresentação)
  - [🔃 Manipulação das Rotas de Cadastro e Login dos usuários *Pacient* e *Volunteer*](#-manipulação-das-rotas-de-cadastro-e-login-dos-usuários-pacient-e-volunteer)
  - [🔃 Manipulação das Rotas para o Login do usuário **Pacient** :](#-manipulação-das-rotas-para-o-login-do-usuário-pacient-)
  - [🔃 Manipulação das Rotas para o login do usuário **Volunteer** :](#-manipulação-das-rotas-para-o-login-do-usuário-volunteer-)
- [✅ Schema Pacients](#-schema-pacients)
- [✅ API deve retornar seguinte JSON:](#-api-deve-retornar-seguinte-json)
- [✅ SchemaVolunteer](#-schemavolunteer)
- [✅ API deve retornar seguinte JSON:](#-api-deve-retornar-seguinte-json-1)
- [✅  **[ POST ] :**  Login para geração de Token](#---post----login-para-geração-de-token)
  - [Login Pacient](#login-pacient)
  - [Login Volunteer](#login-volunteer)
- [🚧 Implementações futuras (Em andamento)](#-implementações-futuras-em-andamento)
- [🛠️ Contribua para o nosso projeto!](#️-contribua-para-o-nosso-projeto)
- [👨‍💻 Autora](#-autora)


<!--te-->

<br>
<br>


## 💻 Sobre o Projeto 

<br>

 API desenvolvida como Projeto Final com o auxílio da professora [Mayhhara Morais](https://www.linkedin.com/in/mayhhara-morais-78040a200/) para a conclusão do curso de Backend 2022.1 | On16 [{Reprograma}](https://reprograma.com.br/)

<p align="justify">Refletindo a Psicologia como esse instrumento de transformação que observa fatores subjetivos, emocionais, históricos e das condições de vida dos sujeitos como determinantes dos quadros de saúde da população. E também em como foi exorbitante a explosão da demanda por saúde mental somatizada a um grande processo de empobrecimento da população brasileira, na atualidade. 

<p align="justify"> Pensando então de que forma tornar mais acessível o atendimento psicológico para a comunidade, nasceu a ideia dessa API [ Psic.connect ] que tem como objetivo principal o de conectar pessoas em situação de vulnerabilidade sócio-econômica com psicólogos que se dispõem a atender voluntariamente essas pessoas, de forma solidária.

<p align="justify">Com o pensamento no futuro próximo de tornar-se um projeto grande e viável para a criação de um espaço seguro, que essas pessoas em situação de vulnerabilidade social possam ter o acompanhamento psicológico adequado, além de algumas implementações futuras como implatação do código de Front-end.

 
<br><br>

## 🚀 Descrição API - Psic.connect

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

* Local : http://localhost:8080

* Heroku : https://psic-connet-api.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para chamar e testar os endpoints da API localmente ou via Heroku

<br>

### 🔃 Retorna a documentação no swagger : 
    
### Swagger - Heroku : 

| Método HTTP  | Endpoint                            | Descrição                            |
| ------------ | ----------------------------------- | ------------------------------------ |
| GET          | `/rota-document`    |  documentação  swagger               |        

<br>

### 🔃 Retorna teste com apresentação: 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `/`      |  Mensagem de apresentação ( Index )    |             |

<br>


### 🔃 Manipulação das Rotas de Cadastro e Login dos usuários *Pacient* e *Volunteer*
<br>

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| POST          | `/pacient/create`                | Cadastra novo usuário Pacient            |
| POST          | `/pacient/login`        | Realiza o login Pacient com email e senha               |
| POST         | `/volunteer/create`         | Cria/cadastra um novo usuário Volunteer        |
| POST          | `/volunteer/login`     | Realiza o login Volunteer com CRP e senha     |

<br>

### 🔃 Manipulação das Rotas para o Login do usuário **Pacient** :

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/volunteer/list`                | Retorna lista de todos profissionais da psicologia cadastrados no banco de dados             |
| GET          | `/volunteer/list/on`                | Retorna todos psicólogos voluntários cadastrados que estão disponíveis para atendimento           |
| GET          | `/volunteer/find/:id`                | Retorna todos dados de cadastro de um voluntário em específico            |
| PATCH         | `/pacient/update/:id`        | Atualiza/modifica dados específicos do cadastro Pacient              |
| DELETE       | `/pacient/delete/:id`     | Deleta um usuário Pacient do sistema         |

<br>


### 🔃 Manipulação das Rotas para o login do usuário **Volunteer** :

<br>

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/pacient/list`                | Retorna lista de todos cadastrados como usuário pacient no banco de dados      |
| GET          | `/pacient/list/on`                | Retorna lista de todos pacientes que ainda não conseguiram iniciar o acompanhamento com algum psicólogo cadastrado no sistema             |
| GET         | `/pacient/triage/:id`        | Retorna informações pessoais e sensíveis dos pacientes que possam contribuir em um processo de triagem por parte do Psicólogo *( Rota segura )*              |
| PATCH         | `/volunteer/update/:id`        | Atualiza/modifica dados específicos do cadastro Volunteer
| DELETE       | `/volunteer/delete/:id`     | Deleta um usuário Volunteer do sistema         |

<br>


## ✅ Schema Pacients 

- id: gerado automaticamente 
- nome: String e obrigatório
- email: String, obrigatório e único
- disponibilidade: texto e obrigatório 
- idade: número e obrigatório
- estadocidade: String e obrigatório
- idgenero: String e opcional 
- etnia: String e opcional 
- rendamedia: Number e obrigatório 
- contato: Number, obrigatório e único
- motivacao: String e obrigatório  
- jaconseguiuatendimento: Boolean e obrigatório
- tempoespera: Number e opcional
- ocupacao: String e obrigatório
- senha: String e obrigatório

<br>

## ✅ API deve retornar seguinte JSON:

```jsx
{
    "nome": "Beatriz Ribeiro de Andrade",
    "idade": 27,
    "estadocidade": "Montanhas Doces, XX",
    "idgenero": "ela",
    "etnia": "branca",
    "rendamedia": 300,
    "email": "arrobateste@reprograma.com",
    "contato": 9988776622,
    "motivacao": "Vontade de chorar toda hora",
    "jaconseguiuatendimento": false,
    "tempoespera": 20,
    "disponibilidade": "quinta-feiras à tarde",
    "ocupacao": "artista plástica",
    "senha": "$2b$10$b7Q0IoTqkYnp1TaiFSN3eOtrEeOHGUKsUINaPnwBOS7Eod1.X3YYK",
    "_id": "62d9d75c0a63eee9f39fc12a",
    "createdAt": "2022-07-21T22:46:52.819Z",
    "updatedAt": "2022-07-21T22:46:52.819Z",
    "__v": 0
}
```
 

 <br>

 ## ✅ SchemaVolunteer

- id: gerado automaticamente 
- nome: String e obrigatório
- idade: Number e obrigatório
- estadocidade: String e obrigatório
- idgenero: String e opcional
- etnia: String e opcional
- crp: String, obrigatório e único
- contato: Number, obrigatório e único
- experienciaclinica: String e obrigatório
- disponibilidade: String e obrigatório
- disponivel: Boolean e obrigatório
- senha: String e obrigatório 


<br>

## ✅ API deve retornar seguinte JSON:

```jsx
{
 
    "nome": "Severino de Qualquer Um",
    "idade": 34,
    "estadocidade": "Montanhas Salgadas, ZZ",
    "idgenero": "ele",
    "etnia": "negro",
    "CRP": 12384372,
    "email": "arrobateste7@reprograma.com",
    "contato": 9988776622,
    "experienciaclinica": "2 anos de experiencia atuando em ongs e etc e tal",
    "disponibilidade": "segundas e terças a tarde",
    "disponivel": true,
    "senha": "$2b$10$zAB9p/9FovzwdmWbLyN72udvCq6vjM3201nQxYgEBb04LSx3y.rwG",
    "_id": "62d9db6c9b6fba79038bcd98",
    "createdAt": "2022-07-21T23:04:12.265Z",
    "updatedAt": "2022-07-21T23:04:12.265Z",
    "__v": 0
}
    

```

<br>

 <br>

 ## ✅  **[ POST ] :**  Login para geração de Token
### Login Pacient
 ```jsx
{
    "email": "arrobateste@reprograma.com",
    "senha": "abacaxiazedo123"
}
 ```

### Login Volunteer
 ```jsx
{
    "crp": "XXXX.XX-XX",
    "senha": "abacaxidoce123"
}
 ```




<br>


## 🚧 Implementações futuras (Em andamento)

<br>

*  Implantação de código Front-end. Para o usuário ter a interação visual
*  Funcionalidade de apenas permitir cadastro de psicólogos com CRP ativo (autenticação da validade do documento)
* Acrescentar ao banco de dados, uma requisição que salva o Id de quem está logado, para ser uma plataforma mais segura
* Implementar rotas GET para otimizar a dinâmica de buscas, e elementos como tags que categorizam e otimizam a experiência de busca da plataforma 
<br>

## 🛠️ Contribua para o nosso projeto!

**1.** Forkar o projeto 

**2.** Criar uma branch para realizar suas alterações: `git checkout -b feature/nome-da-nova-branch`

**3.** Commitar as modificações feitas e abrir um pull request


<br>


</br>

## 👨‍💻 Autora



<br>



<p align="center">
<a>
<td align="center"><a href="https://github.com/beatriz-a-ndrade">
 <img style="border-radius: 25%;" src="public/imagens/PERFIL.jpg" width="120px;" alt="Foto de Perfil de Beatriz"/>
 <br/>
</a>
</p>

<p align="center"> Desenvolvido por <a href="https://www.linkedin.com/in/beatriz-ribeiro-de-andrade-351305218/" target="_blank"><img src="https://img.shields.io/badge/-Beatriz_Andrade-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/beatriz-ribeiro-de-andrade-351305218/" target="_blank"></a> </p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" /> <p align="center"></p>





