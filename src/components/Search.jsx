import styles from "./Search.module.css"
import {ImSearch} from "react-icons/im"
import { useEffect, useState } from "react";
import { useHistory} from "react-router"
import { useQuery } from "../Hooks/useQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search")

    const [searchText, setSearchText] = useState("")
    const history = useHistory();

    useEffect(() => {
        setSearchText(search)
    }, [search]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push("/?search="+ searchText)
        setSearchText("")
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>

                <input 
                className={styles.searchInput} 
                type="text" 
                placeholder="Search Movies..." 
                value={searchText} 
                onChange={(e)=> 
                setSearchText(e.target.value)}
                />

                <button 
                className={styles.searchBtn} 
                type="submit" >
                <ImSearch size={20}/>
                </button>

            </div>
        </form>
    )
}
