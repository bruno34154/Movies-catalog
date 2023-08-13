
export default function CardMovie(props: any){
    return(
        <div className="hover:scale-125 duration-75 h-50 w-60 bg-slate-800 flex flex-col justify-start items-center mt-10 ml-10 rounded-xl" title={props.title}>
            <img alt="movie" src={props.image} className="h-30 w-30 mt-2"/>
            <a href={`detailsMovie/${props.id}`} className="hover:bg-slate-100 hover:text-slate-900 h-15 w-50 p-2 m-2  bg-slate-950 mt-1 rounded-xl text-white text-center">{props.title}</a>
        </div>
    );
}