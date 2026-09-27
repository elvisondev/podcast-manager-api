# Podcast Menager

## Descrição:
- Um app ao estilo netflix, onde eu possa centralizar diferentes epísodios podcast separados por categoria
## Dominio
  - Podcast feitos em vídeo
  
## Features
- Listar os podcats em seções de categorias
  - Saúde
  - Bodybuilder
  - Mentalidade
  - Humor
  - Jogos
  - Streamer
- Filtra epísodio por nomes de podcast


## Feature
- Listar os episodio podcast em sessões de categoria

## Como vou implementar
- Vou retonar em uma api rest (`JSON`) o nome do podcast
- Nome do epísodio 
- Imagem de thubnail 
- Link do video

- GET: Retorna lista de episodios



- Response:


- Listar os podcats em seções de categorias
  ```js
  [
  {
    podcastName:"podpah",
    episode:"CAIOX & OCASTRIN - Podpah #1086",
    videoId:"bMXrArJHS1c",
    cover:"https://i.ytimg.com/vi/bMXrArJHS1c/hq720.jpg?sqp=-",
    link:"https://www.youtube.com/live/bMXrArJHS1c?si=82z3E0J_nPg6KKZg",
    category:["humor", "memes"]
  },
  {
    podcastName:"podpah",
    episode:"BISTECONE & GABRIEL COXINHA - Podpah #1049",
    videoId:"UBv07VGeD24",
    cover:"https://i.ytimg.com/vi/UBv07VGeD24/hq720.jpg?sqp=-",
    link:"https://www.youtube.com/live/UBv07VGeD24?si=a_OCpoFmBovwIIWy",
    category:["jogos", "streamer"]
  }
  ]
  ```

## Melhorias implementadas

### Seed de episódios

Script auxiliar responsável por popular o repositório
`podcast.json` com episódios utilizados pela API.

O script não faz parte das rotas HTTP da aplicação.