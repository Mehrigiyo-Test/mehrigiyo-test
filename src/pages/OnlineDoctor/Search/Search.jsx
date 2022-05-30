import React from "react";
import search from "./../../../images/Search.png";
import "./SearchStyle.scss";

function Search({top}) {
  return (
    <>
    <div className="srch">
      <div className="input" >
        <input
          style={{top: top}}
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
