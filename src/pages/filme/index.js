import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../Services/api.js";
import "./filme-info.css";
import { toast } from 'react-toastify';

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "d983a199ca204458699f87515ed21b7a",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoad(false);
        })
        .catch(() => {
          console.log("filme não encontrado");
          navigate("/", { replace: true });
          return;
        });
    }
    loadFilme();

    return () => {
      console.log("COMPONENTE FOI DESMONTADO");
    };
  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@weenflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmesSalvos) => filmesSalvos.id === filme.id
    );

    if (hasFilme) {
      toast.warn("Esse filme ja está na lista!");
      return;
    }
    filmesSalvos.push(filme);
    localStorage.setItem("@weenflix", JSON.stringify(filmesSalvos));
    toast.success('O filme foi salvo com sucesso!')
  }

  if (load) {
    return (
      <div className="filme-info">
        <h1>Carregando Detalhes...</h1>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>Filmes Spooky Season🦇🎃</h1>
      <br />
      <br />
      <h2>{filme.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} /10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            trailer
          </a>
        </button>
      </div>
    </div>
  );
}
export default Filme;
