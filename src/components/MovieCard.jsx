import {Link} from "react-router-dom"
import style from "./MovieCard.module.css"

import { getMovieImg } from "../utils/getMovieImg";


export function MovieCard({ movie }){
    const imgUrl = getMovieImg(movie.poster_path, 300);
    //### este comentario era como traiamos las imagenes de la api como lo usamos varia veces lo comentamos y lo colocamos en utils en el archivo "getMovieImg" y la llamamos como se muestra aca arriba###
    // const imgUrl = movie.poster_path 
    // ? "https://image.tmdb.org/t/p/w300" + movie.poster_path 
    // : placeholder;

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