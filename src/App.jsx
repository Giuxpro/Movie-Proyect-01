
import styles from "./App.module.css"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import { MovieDetails } from "./pages/MovieDetails"
import { LandinPage } from "./pages/LandingPage"



export function App(){
     return(
         <Router>
             <header>
                <div className={styles.autor}>
                   Autor: Alberto Giuseppe /Full Stack Developer
                </div>
                <div className={styles.titleContainer}>
                <Link to="/">
                     <h1 className={styles.appStyles}>Movies</h1>
                </Link>
                </div>

               
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