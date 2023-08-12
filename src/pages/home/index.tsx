import Slide from "../../components/slide";
import CardMovie from "../../components/cardMovie";
import InputText from "../../components/inputs/text";
interface Image  {
    url: String;
}

export default function Home(){
    const images: Image[] = [
        {url: 'https://jovemnerd.com.br/wp-content/uploads/Avengers151201.jpg'},
        {url: 'https://static.ricmais.com.br/uploads/2020/05/ha-longe-de-casa-banners-tommo.jpg'},
        {url: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/04/barbie_template_poster_site__52e29t424.jpg'},
        {url: 'https://preview.redd.it/y9ocptgp6zc91.jpg?width=1500&format=pjpg&auto=webp&s=2fe63d41e73ec1edb82e147bd6d2feebdf6b386b'}
        
    ];
    return(
        <div className="m-0 p-0  h-full ">
            <Slide image={images}/>
           <div className="flex justify-center"><div className="w-1/2"><InputText title="pesquise por um filme aqui" id="1" /></div></div>
            <CardMovie image="https://m.media-amazon.com/images/I/81arD48HpRL._AC_UF1000,1000_QL80_.jpg" title="Hobbit"/>
            
        </div> 
    );
}