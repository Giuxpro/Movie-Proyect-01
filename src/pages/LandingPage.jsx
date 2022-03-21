import { MoviesCards } from "../components/MoviesCards";
import { Search } from "../components/Search";
import { useDebounce } from "../Hooks/useDebounce";
import { useQuery } from "../Hooks/useQuery";


export function LandinPage(){
    const query = useQuery();
    const search = query.get("search");

    const debouncedSearch = useDebounce(search, 1000);
    return(
        <div>
            <Search/>
            <MoviesCards key={debouncedSearch} search={debouncedSearch}/>
        </div>
    )
}