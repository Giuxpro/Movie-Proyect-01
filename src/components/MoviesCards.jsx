import {useEffect, useState} from "react"
import { get } from "../utils/httpClient"
//import movies from "./Movie.json"  dejo de usar la api local para llamar a una externa con  fetch
import { MovieCard } from "./MovieCard"
import style from "./MoviesCards.module.css"
import { Spinner } from "./Spinner"
import { useQuery } from "../Hooks/useQuery"
import InfiniteScroll from "react-infinite-scroll-component"
import {Empty} from "./Empty"

export function MoviesCards({ search}){

    const [movies, setMovies] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)
    
    

    useEffect( ()=>{
        setLoading(true);
        const searchUrl = search 
        ? "/search/movie?query=" + search + "&page=" +page
        : "/discover/movie?page=" + page
        get(searchUrl)
          .then(data => {
                setMovies(prevMovies => prevMovies.concat(data.results));
                setHasMore(data.page < data.total_pages)
                setLoading(false)
            })
    }, [search, page])

    if(!isLoading && movies.length === 0){
        return <Empty/>
    }

    return (
        <InfiniteScroll 
        dataLength={movies.length} 
        hasMore={hasMore} next={()=> 
        setPage(prevPage => prevPage + 1)}
        loader={<Spinner/>}
        >
            <ul className={style.moviesGrids}>
                {
                    movies.map(movie =>{
                    return(
                        
                            <MovieCard key={movie.id} movie={movie}/>
                    )
                    })
                }
                        
            </ul>
        </InfiniteScroll>
    )
}