export default function Search(data: any, dataInit: any, e: any){
    if(e.target.value === ""){ // verifica se o input de pesquisa esta vazio
        return dataInit //retorna os estado inicial dos dados
    }
    else{
        const filterData = dataInit.filter((dataFilter: any)=>{ //filtra os dados com o que esta sendo pesquisado no momento
            const  {title} = dataFilter;
            return title.toLowerCase().includes(e.target.value.toLowerCase());
        })
        return filterData;// retorna o que foi filtrado
    } 
   
}