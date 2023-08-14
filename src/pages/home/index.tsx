import Slide from "../../components/slide";
import CardMovie from "../../components/cardMovie";
import InputText from "../../components/inputs/text";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../../components/search";
import { FcCancel } from "react-icons/fc";

interface Movie {
  title: String;
  poster_path: string;
  id: string;
  backdrop_path: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const api_key: string = process.env.REACT_APP_API_KEY as string;
  const [moviesInit, setMoviesInit] = useState<Movie[]>([]); // dado auxiliar que recebe os estado inicial dos filmes
  const [error, setError] = useState<Boolean>(false);
  useEffect(() => {
    // recebe os dados da api
    document.title = 'Catalogo de filmes';
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-BR`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
        setMoviesInit(res.data.results);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [api_key]);
  const handleInput = (e: any) => {
    //lida com o que foi inserido no input
    const value = e;
    setMovies(Search(movies, moviesInit, value)); //chama função de pesquisa
  };
  const handleDown = (e: any) => {
    // chama a mesma funçao se o botao de deletar for pressionado
    if (e.key === "Backspace") {
      const value = e;
      setMovies(Search(movies, moviesInit, value));
      setError(false);
    }
  };

  return (
    <div className="m-0 p-0  h-full ">
      <Slide movie={moviesInit} />
      <div className="flex justify-center">
        <div className="w-1/2">
          <InputText
            title="pesquise por um filme aqui"
            id="1"
            name="search"
            type="text"
            onChange={handleInput}
            onKeyDown={handleDown}
          />
        </div>
      </div>
      {movies.length === 0 || error ? (
        <div className="flex flex-col justify-center items-center mt-5">
          <FcCancel size={40} />
          <p className="text-white text-center mt-5 text-xl">
            Dados não encontrados
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap">
          {movies.map((movie: Movie) => (
            <CardMovie
              id={movie.id}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title}
              link={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
