import request from "supertest";
import app from '../api/app.js';

describe("Testes de Integração — API /songs", () => {
it("Deve mostrar a resposta completa da API (debug)", async () => {
  const res = await request(app).get("/songs");
  console.log("Resposta completa da API /songs:", res.body);


    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    // Verifica se há músicas
    expect(res.body.length).toBeGreaterThan(0);

    // Valida as propriedades do primeiro item
    const song = res.body[0];
    expect(song).toHaveProperty("name");
    expect(song).toHaveProperty("artist");
    expect(typeof song.name).toBe("string");
    expect(typeof song.artist).toBe("string");
  });
});