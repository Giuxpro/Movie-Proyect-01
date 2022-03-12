import style from "./MovieCard.module.css"
export function MovieCard({ movie }){
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(
        <li className={style.movieCard}>
            <img className={style.movieImg} src={imgUrl} alt={movie.title} />
            <div>{movie.title}</div>
        </li>
    )
}