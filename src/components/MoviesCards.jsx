import movies from "./Movie.json"
import { MovieCard } from "./MovieCard"
import style from "./MoviesCards.module.css"
export function MoviesCards(){
    return (
        <ul className={style.moviesGrids}>
            {
                movies.map(movie =>{
                   return(
                      
                        <MovieCard key={movie.id} movie={movie}/>
                   )
                })
            }
                    
        </ul>
    )
}