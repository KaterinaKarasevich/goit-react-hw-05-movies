import styled from '@emotion/styled';
import { Link } from "react-router-dom";

const MoviesList = styled.ol`
  
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  font-weight: 500;
  font-size: 18px;
  
`
const MovieItem = styled.li`
  gap: 5px;
  padding: 10px;
   
  `
const LinkItem = styled(Link)`

  color: black;
  font-size: 15px;
  text-decoration: none;
  :hover {
    color: blue;
  }
  
`

export {MoviesList, MovieItem, LinkItem } 