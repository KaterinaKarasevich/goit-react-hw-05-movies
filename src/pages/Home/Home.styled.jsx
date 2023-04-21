import styled from '@emotion/styled';
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;`

const HomeList = styled.ol`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-left: -30px;
  font-weight: 500;
  font-size: 18px;
  
`
const HomeItem = styled.li`
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

export {Container, HomeList, HomeItem, LinkItem } 