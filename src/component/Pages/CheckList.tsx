import React, { useEffect, useState } from "react";
import ChecklistTable from "./ChecklistTable";
import ChecklistTabletw from "./ChecklistTabletw";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginationChecklist from "../pagination/paginationChecklist";
import { connect, useDispatch } from "react-redux";
import { checklistAction } from "../redux/action/checklistAction";
import { RootState } from "../redux/rootReducers/rootReducers";
import AddChecklist from "./AddChecklist";

interface custonPros {
  checklist?: any;
}

function CheckList({ checklist }: custonPros) {
  const [checklisteData, setChecklistData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (checklist && checklist.checklist.length) {
      setChecklistData(checklist.checklist);
    }
  }, [checklist]);

  const [toAdd, setToADD] = useState(true);

  const toShowTheAddlist = () => {
    setToADD(false);
  };

  return (
    <div>
      <Router>
        {toAdd && (
          <button
            onClick={toShowTheAddlist}
            className="btn btn-warning"
            style={{ float: "right" }}
          >
            CREAT A NEW CHECKLIST
          </button>
        )}
        {toAdd ? (
          <Switch>
            <Route exact path="/checklist">
              <ChecklistTable checklisteData={checklisteData} />
            </Route>
          </Switch>
        ) : (
          <AddChecklist />
        )}
        {toAdd && <PaginationChecklist />}
      </Router>
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    checklist: state.checklist,
  };
};

export default connect(mapStateToProps, null)(CheckList);
