<h1 align="center">
  <img src="public/images/capaProjeto.jpg" alt="logomarca Psic.connect ilustração" width="500">
<p align="center">Psic.connect - Saúde Mental : Acesso e Transformação Social <p>
</h1>

#  {reprograma} Projeto Final | :rainbow:
Projeto de conclusão do bootcamp de desenvolvimento Back-end da [{reprograma}](https://reprograma.com.br/) 
<p align="center">

Aplicação disponível [aqui](link do projeto deployado no heroku) :purple_heart: 
<p>

## Objetivo

É sabido, atualmente, a grande relevância do acompanhamento psicológico para o processo de tratamento mental da população. E foi exorbitante a explosão da demanda por saúde mental somatizada a um grande processo de empobrecimento da população brasileira, na atualidade. 
Este projeto é uma iniciativa com o objetivo de conectar pessoas em situação de vulnerabilidade sócio-econômica com psicólogos que se dispõem a atender voluntariamente essas pessoas, com o intuito de contribuir - tornando mais acessível o atendimento psicológico -  que é esse instrumento de transformação que observa fatores subjetivos, emocionais, históricos e das condições de vida dos sujeitos como determinantes dos quadros de saúde da população.
Nossa API, irá consistir em dois cadastros diferentes, o de paciente e o de psicólogo( usuários: Pacient ou Volunteer) , e ao fazer login( passando por uma autenticação via Token)  o paciente poderá pesquisar por psicólogos cadastrados, e ao fazer login o psicólogo poderá pesquisar por pacientes cadastrados, estabelecendo conexão entre os dois lados. Também podendo, ao fazer login atualizar os seus dados de cadastro(como por exemplo atualizar o campo de disponibilidade de horários/dias), além de deletar seu cadastro da plataforma.
 


### Funcionalidades:

- [x] O schema do Pacient deve possuir os seguintes campos: id (autogerado), nome, idade, estado, identidade de gênero, etnia, renda média mensal (medido por salário mínimo), email, número de contato, ocupação, disponibilidade, se já está em atendimento e resumo descritivo da motivação para busca de tratamento psicológico;
- [x] O schema do Volunteer deve possuir os seguintes campos: id (autogerado), nome, idade, estado, identidade de gênero, etnia, CRP, email, número de contato, disponibilidade, se ainda está disponível e resumo sobre sua experiência clínica;
- [x] A API deve permitir o cadastro de usuários Pacient e Volunteer;
- [x] A API deve permitir a visualização das listas de Pacients e Volunteer disponíveis
- [x] A API deve permitir atualização de dados nos dois tipos de cadastros;
- [x] A API deve permitir a exclusão de cadastro dos Pacient e Volunteer do banco de dados.
- [x] Criação de usuário e login para o usuário Pacient com acesso a lista de psicólogos cadastrados com status disponível ;
- [x] Criação de usuário e login para o usuário Volunteer com acesso a lista de pessoas cadastradas no aguardo de atendimento. E acesso privado à dados de triagem dos pacientes.

### Instalação

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


### Tecnologias e pacotes utilizados
- Node.js
- MongoDB
- Git
- Postman
- Heroku
- Express
- Nodemon
- dotenv-safe
- bcrypt
- JWT - jsonwebtoken
- Jest

