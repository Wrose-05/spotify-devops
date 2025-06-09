import express from "express";
import cors from "cors";

// Importando os dados mockados
import { songsArray } from "../../src/assets/database/songs.js";
import { artistArray } from "../../src/assets/database/artists.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/songs", (req, res) => {
  try {
    res.send(songsArray);
  } catch (err) {
    console.error("Erro ao obter músicas:", err.message);
    res.status(500).send({ error: "Erro ao ler músicas" });
  }
});

app.get("/artists", (req, res) => {
  try {
    res.send(artistsArray);
  } catch (err) {
    console.error("Erro ao obter artistas:", err.message);
    res.status(500).send({ error: "Erro ao ler artistas" });
  }
});

export default app;