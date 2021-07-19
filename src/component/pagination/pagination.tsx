import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { getcorporateData } from "../redux/action/corporateAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

interface customPorps {
  corporateList?: any;
}

function Pagination({ corporateList }: customPorps) {
  const dispatch = useDispatch();



  const [page, setPage] = useState(0);

  const pageMinus = () => {
    setPage(page - 8);
  };

  const pagePlus = () => {
    setPage(page + 8);
  };

  useEffect(() => {
    dispatch(getcorporateData(page));
  }, [page]);


  
  return (
    <div className="mt-5 text-end">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button style={{backgroundColor:"transparent" , borderRadius:"4px"}}  onClick={pageMinus}>
              <BsFillCaretLeftFill />
            </button>
          </li>
          <li className="page-item">
            <button style={{backgroundColor:"transparent" , borderRadius:"4px"}}  onClick={pagePlus}>
              <BsFillCaretRightFill />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
