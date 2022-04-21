import React from 'react'
import search from "./../../../images/Search.png"
import "./SearchStyle.css"

function Search() {
  return (
    <>
    <div tabIndex={1} className='Searchsty'>
      <img src={search} alt="" />
      <div><input tabIndex={1} type="text" placeholder='Search' /></div>
    </div>
    </>
  )
}

export default Search