const API = "https://api.themoviedb.org/3";


export function get(path){

 return fetch(API + path, {
         headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzFmZDVhOTYwNDE5NjZlMTVlMDE3Y2EyOGRkOTQ2OCIsInN1YiI6IjYyMzY1NWM4MWRhN2E2MDA0NzcxYmU0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zOm2SiGhLAWBPwxzw-fc6MEaw977E-xyJQSGKtUWG5w",

            "Content-Type": "application/json;charset=utf-8",
        },
    }).then(res => res.json())
}