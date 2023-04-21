import { NavLink } from "react-router-dom";
import styled from '@emotion/styled'

const Container = styled.div`
 
  margin-bottom: 10px;
 
  padding: 20px;`

const StyledLink = styled(NavLink)`
  color: blue;
  font-size: 20px;
  margin-left: 10px;
  text-decoration: none;
  &.active {
    color: red;
  }
`
export {Container, StyledLink } 
