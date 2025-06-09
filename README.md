# spotify-cloud2

---

Este projeto é uma aplicação "Play-Spotify", demonstrando a integração de um frontend em React com um backend em Node.js, utilizando Docker para orquestração.

---

## Como Rodar Localmente

Para iniciar o frontend em seu ambiente local:

1.  Navegue até o diretório: \Spotify-cloud2\aula 1\Gabarito aula 1
2.  Instale as dependências:
    npm i
    
3.  Inicie o servidor de desenvolvimento:
    npm run dev
    
## Como Rodar com Docker

### Frontend (Docker)

Para construir e executar a imagem Docker do frontend:

1.  Navegue até o diretório do frontend (conforme mencionado acima): \Spotify-cloud2\aula 1\Gabarito aula 1
2.  Construa a imagem Docker:
    bash
    docker build -t vite-front .
    
3.  Execute o contêiner Docker, mapeando a porta 8080 do seu host para a porta 80 do contêiner:
    bash
    docker run -p 8080:80 vite-front
    

### Backend (Docker)

Para construir e executar a imagem Docker do backend:

1.  Navegue até o diretório do backend (conforme mencionado acima): \Spotify-cloud2\aula 1\Gabarito aula 1
2.  Construa a imagem Docker:
    bash
    docker build -t backend .
    
3.  Execute o contêiner Docker, mapeando a porta 3001 do seu host para a porta 3001 do contêiner:
    bash
    docker run -p 3001:3001 backend
    

---

## Como Rodar com Docker Compose

Para orquestrar o frontend, backend e MongoDB juntos usando Docker Compose:

1.  Certifique-se de estar no diretório raiz do projeto onde o arquivo docker-compose.yml está localizado.
2.  Para construir as imagens e iniciar todos os serviços:
    bash
    docker compose up --build
    
3.  Para derrubar os serviços e remover os contêineres:
    bash
    docker compose down

4. (Se necessario) Apague os contêineres e volumes para garantir que o cache do node_modules não quebre de novo:
   docker compose down --volumes --remove-orphans

---

## Acessando a Aplicação

Após subir os projetos (seja localmente ou com Docker/Docker Compose):

* *Front-end React:* Acesse no seu navegador em http://localhost:8080
* *Back-end API:* Acesse no seu navegador ou via Postman em http://localhost:3001

---