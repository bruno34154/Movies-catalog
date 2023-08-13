import Slide from "../../components/slide";
import CardMovie from "../../components/cardMovie";
import InputText from "../../components/inputs/text";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../../components/search";
interface Image  {
    url: String;
}
interface Movie  {
    title: String;
    poster_path:string;
    id: string;
    backdrop_path: string;
}

export default function Home(){
    const [movies, setMovies] = useState<Movie[]>([])
    const api_key: string = (process.env.REACT_APP_API_KEY as string)
    const [moviesInit, setMoviesInit] = useState<Movie[]>([])  // dado auxiliar que recebe os estado inicial dos filmes
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-BR`).then((res)=>{
            console.log(res.data.results)
            setMovies(res.data.results)
            setMoviesInit(res.data.results)
        }).catch(()=>{
            console.log('erro')
        })
    }, [api_key])
    const handleInput = (e: any)=>{
        const value = e
        setMovies(Search(movies, moviesInit, value))
    }
    const handleDown = (e: any)=>{ // chama a mesma funçao se o botao de deletar for pressionado
        if(e.key === "Backspace"){
            const value = e
             setMovies(Search(movies, moviesInit, value))
        } 
    }
    const images: Image[] = [
        {url: 'https://jovemnerd.com.br/wp-content/uploads/Avengers151201.jpg'},
        {url: 'https://static.ricmais.com.br/uploads/2020/05/ha-longe-de-casa-banners-tommo.jpg'},
        {url: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/04/barbie_template_poster_site__52e29t424.jpg'},
        {url: 'https://preview.redd.it/y9ocptgp6zc91.jpg?width=1500&format=pjpg&auto=webp&s=2fe63d41e73ec1edb82e147bd6d2feebdf6b386b'}
        
    ];
    return(
        <div className="m-0 p-0  h-full ">
            <Slide image={images} movie={movies}/>
           <div className="flex justify-center"><div className="w-1/2"><InputText title="pesquise por um filme aqui" id="1" name="search" type="text" onChange={handleInput} onKeyDown={handleDown}/></div></div>
           <div className="flex flex-wrap">
            {
                movies.map((movie: Movie)=>(
                    <CardMovie id={movie.id} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} />
                ))
            }
          
           </div>
            
            
        </div> 
    );
}