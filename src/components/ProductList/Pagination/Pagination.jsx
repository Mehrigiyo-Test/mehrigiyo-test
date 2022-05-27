import React, { useEffect, useState } from "react";
import ArrowBottom from "../../../images/Caret.svg";
import "./Pagination.scss";

const Pagination = ({
  active,
  setPagination,
  data,
  sortedData,
  pagination,
}) => {
  const length =
    active === "products"
      ? Math.ceil(data.length / 5)
      : Math.ceil(sortedData.length / 5);
  const [numbers, setNumbers] = useState([]);
  const [prevNumbers, setPrevNumbers] = useState(0);
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    let fakeNumbers = [];
    for (let i = 0; i < length; i++) {
      fakeNumbers.push(i + 1);
    }
    setNumbers(fakeNumbers);
  }, [length]);



  let styledNumber = () => {
    if (numbers.length === 1) return 1;
    else if (numbers.length === 2) return 2;
    return 3;
  };

  const handlePaginate = () => {
    setPrevNumbers(prevNumbers + 1);
  };
  const handlePaginateMinus = () => {
    setPrevNumbers(prevNumbers - 1);
  };

  const handleTranslate = (item) => {
    setPagination(item - 1);
    if (item % 3 === 0) setTranslate(2);
    else if (item % 3 === 1) setTranslate(0);
    else if (item % 3 === 2) setTranslate(1);
  };



  return (
    <div className="product-list__pagination">
      <div className="numbers-arrow">
        {prevNumbers !== 0 && (
          <img className="prevButton" src={ArrowBottom} onClick={handlePaginateMinus} alt="" />
        )}

        <div className="numbers">
          {numbers
            .slice(prevNumbers * 3 + 0, 3 + prevNumbers * 3)
            .map((item) => (
              <p key={Math.random()} onClick={() => handleTranslate(item)}>
                {item}
              </p>
            ))}
        </div>
        <img src={ArrowBottom} onClick={handlePaginate} alt="" />
      </div>
      <div className="lines" style={{ width: `${styledNumber() * 45 + 5}px` }}>
        <div
          className="product-line"
          style={{ transform: `translateX(${translate * 37}px)` }}
        ></div>
      </div>
    </div>
  );
};

export default Pagination;
