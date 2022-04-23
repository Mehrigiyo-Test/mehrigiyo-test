import React from "react";
import search from "./../../../images/Search.png";
import "./SearchStyle.css";

function Search() {
  return (
    <>
    <div className="srch">
      <div className="input" >
        <input
          tabIndex={1}
          type="text"
          placeholder="Qidirish"
          // className="input"
        />
      </div>
      {/* <img src={search} alt="" className="img" /> */}
      </div>
    </>
  );
}

export default Search;
