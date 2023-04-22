import styled from '@emotion/styled';


const CastList = styled.ul`
  display:flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;
  font-size: 16px;
  padding-left: 10px;
`
const CastItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 300px;
  background-color: lightgray;
  border-radius: 10px;
`

const CastItemImg = styled.img`
  display: block;
  height: 100%;
  border-radius: 10px;
`
const CastItemInfo = styled.div`
  display:flex;
  flex-direction: column;
  padding: 5px;
`
export {CastList, CastItem, CastItemImg, CastItemInfo}  