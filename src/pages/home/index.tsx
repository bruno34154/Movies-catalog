import Slide from "../../components/slide";



export default function Home(){
    const images: any = [
        {url: 'https://jovemnerd.com.br/wp-content/uploads/Avengers151201.jpg'},
        {url: 'https://static.ricmais.com.br/uploads/2020/05/ha-longe-de-casa-banners-tommo.jpg'},
        {url: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/04/barbie_template_poster_site__52e29t424.jpg'},
        {url: 'https://preview.redd.it/y9ocptgp6zc91.jpg?width=1500&format=pjpg&auto=webp&s=2fe63d41e73ec1edb82e147bd6d2feebdf6b386b'}
        
    ];
    return(
        <div >
            <p className="text-red-950">Aqui vai ter os filmes populares</p>
            <Slide image={images}/>
        </div> 
    );
}