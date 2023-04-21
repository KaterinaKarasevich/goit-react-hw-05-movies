import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from "../Loader";
import { Container, StyledLink  } from "components/Layout/Layout.styled";
//const StyledLink = styled(NavLink)`
//   color: black;
  
//   &.active {
//     color: blue;
//   }
// `;
export const Layout = () => {
    return (
    <Container>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
        {/* <Link to="/movies/:movieId">MovieDetails</Link>   */}
        </nav>
        <Suspense fallback = {<Loader />}>
          <Outlet />
        </Suspense>
        
    </Container>
    )
}

export default Layout