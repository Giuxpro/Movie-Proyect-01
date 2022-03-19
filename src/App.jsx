import { MoviesCards } from "./components/MoviesCards"
import styles from "./App.module.css"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import { MovieDetails } from "./pages/MovieDetails"
import { LandinPage } from "./pages/LandingPage"
import { MovieCard } from "./components/MovieCard"


export function App(){
     return(
         <Router>
             <header>
                <Link to="/">
                     <h1 className={styles.appStyles}>Movies</h1>
                </Link>

                <Link to="/">Home</Link>
                 <br />
                <Link to="/movie">Movie</Link>
             </header>
             <main>
               <Switch>
                    <Route exact path="/movie/:movieId">
                       <MovieDetails/>
                    </Route>
                    
                    <Route path="/">
                       <LandinPage/>
                    </Route>                   
               </Switch>
             </main>   
         </Router>
     )
    
}