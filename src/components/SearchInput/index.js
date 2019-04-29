import React from 'react'
import './style.scss'

function SearchInput(props) {

  let handleSearch = (e) => {
    props.onSearch(e.target.value)
  };

  return (
    <div className='search-input'>
      <input className='search-input__fiend' type='text' placeholder='Search hero' onChange={handleSearch} />
    </div>
  )
}

export default SearchInput;