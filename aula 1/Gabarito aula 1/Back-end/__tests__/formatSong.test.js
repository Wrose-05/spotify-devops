import formatSong from "../utils/formatSong";

// eslint-disable-next-line no-undef
describe("Função formatSong", () => {
  // eslint-disable-next-line no-undef
  it("Deve formatar os dados da música corretamente", () => {
    const song = {
      _id: "123",
      title: "som da praia",
      artist: "DJ Praia",
      duration: "03:45",
    };

    const result = formatSong(song);

    // eslint-disable-next-line no-undef
    expect(result).toEqual({
      id: "123",
      title: "SOM DA PRAIA",
      artist: "DJ Praia",
      duration: "03:45",
    });
  });

  // eslint-disable-next-line no-undef
  it("Deve definir duração padrão se não for fornecida", () => {
    const song = {
      _id: "456",
      title: "sol e mar",
      artist: "Banda Verão",
    };

    const result = formatSong(song);

    // eslint-disable-next-line no-undef
    expect(result.duration).toBe("00:00");
  });
});
