import {Link} from "react-router-dom"
import style from "./MovieCard.module.css"
export function MovieCard({ movie }){
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(
        <li className={style.movieCard}>
            <Link to={"/movie/" + movie.id}>
                <img 
                    height={345}
                    width={230}
                    className={style.movieImg}
                    src={imgUrl}
                    alt={movie.title}
                />
            <div>{movie.title}</div>
            </Link>
        </li>
    )
}