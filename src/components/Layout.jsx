import { Outlet, Link } from "react-router-dom";
export const Layout = () => {
    return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        {/* <Link to="/movies/:movieId">MovieDetails</Link>   */}
      </nav>
        <Outlet/>
    </div>
    )
}

export default Layout