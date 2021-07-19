import React, { useEffect, useState } from "react";


import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { checklistAction } from "../redux/action/checklistAction";
import { useDispatch } from "react-redux";

function PaginationChecklist() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  

  const paginatePlus = () => {
    setPage(page+8);
  };

  const paginateMinus = () => {
    setPage(page-8);
  };

  useEffect(() => {
    dispatch(checklistAction(page));
  }, [page]);

  return (
    <div className="mt-5 text-end">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button style={{backgroundColor:"transparent" , borderRadius:"4px"}} onClick={paginateMinus}>
              <BsFillCaretLeftFill />
            </button>
          </li>
          <li className="page-item">
            <button style={{backgroundColor:"transparent" , borderRadius:"4px"}} onClick={paginatePlus}>
              <BsFillCaretRightFill />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PaginationChecklist;
