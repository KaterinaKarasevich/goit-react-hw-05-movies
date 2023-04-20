import  React, {useState } from "react"
import PropTypes from 'prop-types'; 

import { SearchForm, SearchFormButton, SearchFormInput } from "components/SearchBar/SearchBar.styled"
import { useSearchParams } from "react-router-dom";


const Searchbar = () => {
  const [value, setValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams()  
  const query = searchParams.get("query") ?? "";
  console.log(query)
  
  const handleSubmit = e => {
    e.preventDefault();
    const queryValue = value;
    if (queryValue === "") {
      return setSearchParams({})
    }
    setSearchParams({ query: queryValue })
    setValue("");
  }

const handleChange = (evt) => {;
   setValue(evt.currentTarget.value) 
  };

// const handleSubmit = (e) => {
//   e.preventDefault()
//   createSearchText(value)
//   setValue("");
 
// }
 
return (

  <SearchForm onSubmit={handleSubmit}>
    <SearchFormButton type="submit" >Search</SearchFormButton>

    <SearchFormInput
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search movies"
      onChange={handleChange}
      value={value}
        
    />
  </SearchForm>
)
 
}

Searchbar.propTypes = {
   value : PropTypes.string,   
}

export default Searchbar