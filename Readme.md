# 🎙️ Podcast Manager API

API REST para gerenciamento e consulta de episódios de podcasts, desenvolvida com **Node.js** e **TypeScript**, utilizando os módulos nativos do Node.js e **sem o uso de frameworks web**.

O projeto foi desenvolvido com o objetivo de praticar a construção de uma API a partir dos fundamentos do protocolo HTTP, trabalhando com rotas, controllers, services, repositories, query parameters e manipulação de arquivos JSON.

## 📌 Sobre o projeto

O **Podcast Manager API** centraliza episódios de diferentes podcasts em um repositório JSON e disponibiliza endpoints para consultar esses dados.

Atualmente, a API permite:

- Listar todos os episódios cadastrados;
- Filtrar episódios pelo nome do podcast;
- Organizar os episódios por categorias;
- Retornar os dados no formato JSON.

Os dados são armazenados localmente no arquivo `podcast.json`.

## 🚀 Funcionalidades

### Listar episódios

Retorna todos os episódios cadastrados no repositório.

```http
GET /api/list
```

### Filtrar episódios

Retorna somente os episódios pertencentes ao podcast informado através do query parameter `p`.

```http
GET /api/episode?p=podpah
```

Exemplo:

```text
http://localhost:3333/api/episode?p=podpah
```

## 📦 Exemplo de resposta

```json
[
  {
    "podcastName": "podpah",
    "episode": "CAIOX & OCASTRIN - Podpah #1086",
    "videoId": "bMXrArJHS1c",
    "category": ["humor", "memes"]
  }
]
```

## 🏗️ Estrutura do projeto

```text
src/
├── controllers/
│   └── podcast-controllers.ts
│
├── models/
│   ├── podcast-model.ts
│   └── podcast-transfer-model.ts
│
├── repositories/
│   ├── podcast-repository.ts
│   └── podcast.json
│
├── routes/
│   ├── routes-paths.ts
│   └── routes.ts
│
├── script/
│   ├── podcasts-data.ts
│   └── seed-podcasts.ts
│
├── services/
│   ├── filter-episodes-services.ts
│   └── list-episodes-service.ts
│
├── utils/
│   ├── content-type.ts
│   ├── http-methods.ts
│   └── http-status-code.ts
│
├── app.ts
└── server.ts
```

A aplicação utiliza uma separação de responsabilidades entre as camadas de **controller**, **service** e **repository**.

O `podcast.json` funciona como o repositório local dos episódios utilizados pela API.

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/) — ambiente de execução JavaScript;
- [TypeScript](https://www.typescriptlang.org/) — tipagem e desenvolvimento da aplicação;
- [TSX](https://tsx.is/) — execução do TypeScript durante o desenvolvimento;
- [tsup](https://tsup.egoist.dev/) — geração do build da aplicação;
- [Node.js HTTP](https://nodejs.org/api/http.html) — criação do servidor HTTP sem framework;
- [Node.js File System (FS)](https://nodejs.org/api/fs.html) — leitura do repositório JSON;
- [Node.js Path](https://nodejs.org/api/path.html) — manipulação dos caminhos dos arquivos.

> A API foi construída sem Express, Fastify ou outro framework web, utilizando diretamente os recursos nativos do Node.js.

## ⚙️ Como executar

### Pré-requisitos

É necessário possuir o [Node.js](https://nodejs.org/) instalado.

### Clone o repositório

```bash
git clone <URL-DO-REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd gerenciado-podcast
```

Instale as dependências:

```bash
npm install
```

### Desenvolvimento

Execute a aplicação:

```bash
npm run dev
```

Para executar em modo watch:

```bash
npm run dev:watch
```

O servidor será iniciado por padrão em:

```text
http://localhost:3333
```

## 📜 Scripts disponíveis

| Script | Descrição |
| --- | --- |
| `npm run dev` | Executa a aplicação TypeScript com TSX |
| `npm run dev:watch` | Executa a aplicação em modo watch |
| `npm run dist` | Gera o build utilizando tsup |
| `npm run start:dist` | Gera e executa a versão de distribuição |

## 🧠 Conceitos praticados

Durante o desenvolvimento deste projeto foram aplicados conceitos como:

- Criação de servidor HTTP com Node.js;
- API REST sem framework;
- Métodos HTTP;
- Status codes;
- Endpoints;
- Query parameters;
- Request e Response;
- Manipulação de URLs;
- Leitura de arquivos com `fs`;
- Manipulação de caminhos com `path`;
- JSON;
- Interfaces e tipagem com TypeScript;
- Enums;
- Separação entre Controller, Service e Repository;
- Variáveis de ambiente;
- Execução e build de aplicações TypeScript.

## 📖 Documentação

A pasta `docs` contém materiais utilizados para documentar e representar o funcionamento da aplicação:

```text
docs/
├── app.md
└── app.drawio
```

O arquivo `app.drawio` apresenta visualmente o fluxo e a divisão de responsabilidades da aplicação.

## 🔮 Melhorias futuras

### Seed de episódios

Implementar os scripts:

```text
podcasts-data.ts
seed-podcasts.ts
```

A proposta é utilizar um script auxiliar para popular automaticamente o repositório `podcast.json`, reduzindo a necessidade de cadastrar manualmente os episódios utilizados pela API.

Essa funcionalidade será mantida separada do fluxo HTTP principal da aplicação.

## 📄 Licença

Este projeto está sob a licença ISC.