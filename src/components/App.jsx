
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "components/Loader";
import Layout from "components/Layout/Layout";
//import MovieDetails from "pages/MovieDetails";
// import Movies from "pages/Movies";
// import Home from "pages/Home";

// import Cast from "components/Cast";
// import Reviews from "components/Reviews";

const Home = lazy(() => import("pages/Home/Home"))
const Movies = lazy(()=> import("pages/Movies/Movies"))
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"))
const Cast = lazy(() => import("components/Cast/Cast"))
const Reviews = lazy(() => import("components/Reviews/Reviews"))


export const App = () => {
  return (
    <div>
    {/* //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/movies">Movies</Link>n
    //     <Link to="/movies/:movieId">MovieDetails</Link>
       
    //   </nav> */}
    <Suspense fallback = {<Loader />}>
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
    </Suspense>
    </div>
  );
};
