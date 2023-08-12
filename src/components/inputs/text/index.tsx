import { InputHTMLAttributes } from "react";
type InputType = InputHTMLAttributes<HTMLInputElement> & {
    small?: boolean;
    danger?: boolean;
    info?: boolean;
    warn?: boolean;
    sucess?: boolean;
    invalid?: boolean;
  };
export default function InputText({ id, invalid, ...rest }: InputType){
    return(
        <div className="mt-3">
         <input id={id} placeholder="pesquise por um filme aqui" className="bg-slate-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " {...rest}></input>
        </div>
    );
}