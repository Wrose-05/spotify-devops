import app from "./app.js";

const PORT = 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Servidor está rodando em http://${HOST}:${PORT}`);
});