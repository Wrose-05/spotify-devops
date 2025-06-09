import axios from "axios";

//RODAR PARA DESENVOLVIMENTO
const URL = "http://localhost:3000"

//RODAR COM DOCKER
// Use o nome do serviço definido no docker-compose.yml
//const URL = "http://express_backend:3001";


const responseArtists = await axios.get(`${URL}/artists`)
const responseSongs = await axios.get(`${URL}/songs`)

export const artistArray = responseArtists.data
export const songsArray = responseSongs.data

// console.log(responseArtists.data)

