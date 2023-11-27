
# Boas vindas ao projeto

# Sumário

- [Apresentação do projeto](#apresentação-do-projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Deploy](#deploy)
- [Instalação e uso](#instalação-e-uso)

---

#  Apresentação do projeto
O Diel Calendar é uma aplicação web backend realizada na etapa do teste técnico no processo seletivo da MKS solutions.

---

# Tecnologias:
Conforme os requisitos de tecnologia do projeto, também comentei o tempo de experiência com cada stack

<div>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-339933?style=for-the-badge&logo=typescript&color=gray" />
  </a> - 1 ano e meio de experiência
 </div>
 <div>
  <a href="https://javascript.info/">
    <img src="https://img.shields.io/badge/javascript-339933?style=for-the-badge&logo=javascript&color=gray" />
  </a> - 2 anos de experiência
  </div>
   <div>
  <a href="https://docs.npmjs.com/">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&color=gray" />
  </a> - 2 anos de experiência
 </div>
  <div>
  <a href="https://nestjs.com/">
    <img src="https://img.shields.io/badge/nest-339933?style=for-the-badge&logo=nestjs&color=gray" /> 
  </a> - 1 ano e meio de experiência
   </div>
  <a href="https://typeorm.io/">
    <img src="https://img.shields.io/badge/typeorm-339933?style=for-the-badge&logo=typeorm&color=gray" />
  </a> - Meio ano de experiência
   </div>
   <div>
   <a href="https://www.postgresql.org">
    <img src="https://img.shields.io/badge/postgresql-339933?style=for-the-badge&logo=postgresql&color=gray" />
  </a> - 1 ano e meio de experiência
  </div>
   <div>
   <a href="https://redis.io/">
    <img src="https://img.shields.io/badge/redis-339933?style=for-the-badge&logo=redis&color=gray" />
  </a> - 1 ano e meio de experiência
  </div>
  <div>
  <a href="https://swagger.io/">
    <img src=" https://img.shields.io/badge/swagger-339933?style=for-the-badge&logo=swagger&color=gray" />  [swagger]
  </a> - 1 ano  de experiência
  </div>
  <div>
  <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/docker-339933?style=for-the-badge&logo=docker&color=gray" />
  </a> - 1 ano e meio de experiência
</div>


# Funcionalidades

**Fluxo de Usuarios**
- Cadastrar um novo usuario

- Cadastrar novo usuário
- Listar todos os usuários
- Listar um usuário específico
- Editar um usuário
- Excluir usuário


**Fluxo de Login**
- Realizar Login no sistema

**Fluxo de Filmes**

*Rotas que necessitam login no sistema*

- Cadastrar novo filme
- Listar todos os filmes
- Listar um filme específico
- Editar um filme
- Excluir filme


---
# Deploy:
Para o deploy utilizei a plataforma [Railway](https://railway.app/)

link:
[mks-challenge.up.railway.app](https://mks-challenge.up.railway.app/)

---
# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
```  
- node v18.16.0  
- npm v9.5.1  
- git version v2.34.1  
  
```  
  
[Download node js](https://nodejs.org/en/)  
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
  
### Clonando o projeto  
  
Digite o comando abaixo para clonar o projeto.  
  
```  
git clone https://github.com/TiagoEmanuel8/EnaFood.git
  
```  
  
Entre na pasta  
  
```  
cd EnaFood
  
```  
### Executando o projeto com **docker**

<details>

<summary>Clique para exibir os detalhes</summary>


### Execute o comando abaixo para iniciar o docker  
  
```  
docker-compose up -d
```  
### Execute o projeto  
  em ambos os terminais digite
```  
npm start  
```  
ou
```  
npm run nodemon  
```  

### Caso queira parar a execução do docker use o comando
  
```  
docker-compose down --rmi local --volumes --remove-orphans
```  

</details>

### Executando o projeto **localmente**

<details>

<summary>Clique para exibir os detalhes</summary>
  
### Instale as dependências  
  
```  
npm install  
```  
### Execute o projeto  
  
```  
npm start  
```  
ou
``` 
npm run nodemon  
``` 
</details>

---
