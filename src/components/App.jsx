
import { Routes, Route, Link, useParams } from "react-router-dom";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import Home from "pages/Home";
import Layout from "components/Layout";
import Cast from "components/Cast";
import Reviews from "components/Reviews";
export const App = () => {
  return (
    // <div>
    //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/movies">Movies</Link>n
    //     <Link to="/movies/:movieId">MovieDetails</Link>
       
    //   </nav>
    <Routes>
      {/* <Route path="/" element={<div>Home Page</div>}/> */}
      <Route path="/" element={<Layout />}> 
        <Route index element={<Home/>}/>
    
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Home/>} />
      </Route>
    </Routes>
   // </div>
  );
};

//const MovieDetails = () => {
 // const {movieId} = useParams();
 // console.log(movieId)
//}

