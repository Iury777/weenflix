import axios from 'axios'

// Base da URL: https://api.themoviedb.org/3/
//URL da api: movie/now_playing?api_key=d983a199ca204458699f87515ed21b7a&language=pt-Br

// Base da URL: https://api.themoviedb.org/3/
//URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=d983a199ca204458699f87515ed21b7a

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'

})

export default api;