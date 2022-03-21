import styles from "./Search.module.css"
import {ImSearch} from "react-icons/im"
import { useHistory} from "react-router"
import { useQuery } from "../Hooks/useQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search")

    
    const history = useHistory();

    

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push("/?search="+ search) 
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>

                <input 
                className={styles.searchInput} 
                type="text" 
                placeholder="Search Movies..." 
                aria-label="Search Movies"
                value={search ??""} 
                autoFocus
                onChange={(e)=>{
                    const value = e.target.value;
                    history.push("/?search="+ value)
                }}
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
