import { useEffect, useState } from "react";
import {useParams} from "react-router"
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css"


export function MovieDetails(){
    const {movieId} = useParams();
    const [isLoading, setLoading] = useState(true);
    const [movie , setMovie] = useState(null);

   
    useEffect(()=>{
        setLoading(true);

        get("/movie/" + movieId)
            .then(data =>{
                setMovie(data);
                setLoading(false);
            })
    }, [movieId])

    if(isLoading){
        return <Spinner/>
    }

    
 
    const imgUrl = "https://image.tmdb.org/t/p/w400" + movie.poster_path;
    return (
        <div className={styles.detailsContainer}>
            
            <img  className={`${styles.col} ${styles.movieImage}`} src={imgUrl} alt={movie.title}/>
            <div className={`${styles.col} ${styles.movieDetails}`} >
                <p className={styles.firstP}>
                    <strong>Title:</strong> {movie.title} 
                </p>
                <p>
                    <strong>Year:</strong> {movie.release_date}
                </p>
                <p>
                    <strong>Produced by:</strong> {movie.production_companies.map(producer => producer.name).join(" | ")}
                </p>
                <p>
                    <strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(" | ")}
                </p>
                <p>
                    <strong>Vote:</strong> {movie.vote_average}
                </p>
                <p>
                    <strong>Sinopsis:</strong> {movie.overview}
                </p>
            </div>
        </div>
    )
}