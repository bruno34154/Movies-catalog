import { AiOutlineHome, AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardMovie from "../../components/cardMovie";
import axios from "axios";
interface Movie {
  title: String;
  poster_path: string;
  id: string;
  vote_average: string;
  overview: string;
  release_date: Date;
}
export default function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>({
    title: "",
    poster_path: "",
    id: "",
    vote_average: "",
    overview: "",
    release_date: new Date(),
  });
  const api_key: string = process.env.REACT_APP_API_KEY as string;
  const release = new Date(movie.release_date)
    .toLocaleString("pt-BR")
    .split(",");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovie(res.data);
      })
      .catch(() => {
        console.log("erro");
      });
  }, [api_key, id]);
  return (
    <div>
      <a
        href="/"
        title="voltar a pagina inicial"
        className="hover:scale-125 duration-75 text-white"
      >
        <AiOutlineHome size={40} className="hover:scale-125 duration-75" />
      </a>
      <h1 className="text-white text-center text-xl">{movie.title}</h1>
      <div className="flex p-5 sm:flex-col">
        <div>
          <CardMovie
            id={movie.id}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            link={false}
          />
        </div>
        <div className="text-white  ml-5  flex flex-col">
          <div className="text-white text-center ml-5 mt-20 flex text-xl">
            <AiFillStar className="mr-2" size={30} /> Media de votos:{" "}
            {movie.vote_average}{" "}
          </div>
          <div className="text-white  ml-5  mt-5 flex flex-col">
            <p className="  text-xl text-justify">Sinopse: </p>
            {movie.overview}
          </div>
          <div className="text-white  ml-5  mt-5 flex text-xl">
            <p className=" mr-5"> Data de lançamento: </p> {release[0]}
          </div>
        </div>
      </div>
    </div>
  );
}
