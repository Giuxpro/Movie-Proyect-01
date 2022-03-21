import { MoviesCards } from "../components/MoviesCards";
import { Search } from "../components/Search";
import { useQuery } from "../Hooks/useQuery";


export function LandinPage(){
    const query = useQuery();
    const search = query.get("search");


    return(
        <div>
            <Search/>
            <MoviesCards key={search} search={search}/>
        </div>
    )
}