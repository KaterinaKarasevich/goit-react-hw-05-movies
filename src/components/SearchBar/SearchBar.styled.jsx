import styled from '@emotion/styled'


const SearchForm = styled.form`
  padding: 30px;
  display: flex;
  align-items: center;
  max-width: 300px;
  
`

const SearchFormButton = styled.button`
  display: inline-block;
  height: 36px;
  border-color: blue;
  opacity: 0.5;
  cursor: pointer;
     &:hover {
      opacity: 1;
}
`

const SearchFormInput = styled.input`
  display: inline-block;
  height: 30px;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border-color: blue;
  outline: blue;
  padding-left: 10px;
  padding-right: 4px;
  &::placeholder {
  font: inherit;
  font-size: 16px;
}
`

export {SearchForm, SearchFormButton, SearchFormInput}

