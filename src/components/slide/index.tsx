import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { useState } from 'react';

export default function Slide(props: any){
    const [cont, setCont] = useState(0)

    const previousImage = ()=>{
        cont === 0? setCont(props.image.length - 1): setCont(cont-1); 
    }

    const nextImage = ()=>{
        cont === props.image.length - 1? setCont(0): setCont(cont+1)
    }
    return(
        <div className="max-w-[1800px] h-[200px] w-full m-auto  relative group">
            <div style={{backgroundImage: `url(${props.image[cont].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500" >
            </div>

            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft size={30} onClick={previousImage}/>
            </div>

            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight size={30} onClick={nextImage}/>
            </div>
        </div>
    );
}