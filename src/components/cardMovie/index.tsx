
export default function CardMovie(props: any){
    return(
        <div className="hover:scale-125 duration-75 h-52 w-36 bg-slate-100 flex flex-col justify-start items-center mt-10 ml-10 rounded-xl" title={props.title}>
            <img alt="movie" src={props.image} className="h-40 w-4/6 mt-2"/>
            <div className="h-6 w-3/5 bg-slate-950 mt-1 rounded-xl"><p className="text-white text-center">{props.title}</p></div>
        </div>
    );
}