import React from "react";
import search from "./../../../images/Search.png";
import "./SearchStyle.scss";

function Search() {
  return (
    <>
    <div className="srch">
      <div className="input" >
        <input
          tabIndex={1}
          type="text"
          placeholder="Qidirish"
        />
      </div>
      </div>
    </>
  );
}

export default Search;
