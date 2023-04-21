import styled from '@emotion/styled';
import { Link } from "react-router-dom";

const MovieDetailsList = styled.ul`
  list-style: none;
  flex-direction: row;
  margin-left: -40px;
  font-size: 16px;
`
const MovieDetailsItem = styled.li`
  padding: 5px; 
`
const LinkItem = styled(Link)`
  color: blue;
  font-size: 16px;
  margin-top: 20px;
  margin-left: 10px;
  display: block;
  text-decoration: none;
  :hover {
    color: red;
  } 
`

const LinkItemDetails = styled(Link)`
  color: blue;
  font-size: 16px;
  display: block;
  text-decoration: none;
  :hover {
    color: red;
  }
  `
  export {MovieDetailsList, MovieDetailsItem, LinkItem, LinkItemDetails } 