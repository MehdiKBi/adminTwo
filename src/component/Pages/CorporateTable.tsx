import { connect, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducers/rootReducers";
import { deleteCorporateAction } from "../redux/action/corporateAction";
import { useHistory } from "react-router-dom";
import {useTitle} from "react-use"


interface customProps {
  corporateList: any;
}

function CorporateTable({ corporateList }: customProps) {
  const dispatch = useDispatch();
  const history = useHistory();




  const deletCorporate = (id: any) => {
    dispatch(deleteCorporateAction(id));
    console.log(id);
    console.log("is modified arr", corporateList);
    setTimeout(() => {
      history.go(0);
    }, 200);
  };

  const editCorporate = (id: any) => {
    history.push(`/corporate/${id}`);
  };




  return (
    <div>
      {corporateList && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Domain</th>
              <th scope="col">Mail restrictions</th>
            </tr>
          </thead>
          <tbody>
            {corporateList &&
              corporateList.map((y: any) => (
                <tr key={y._id}>
                  <td>{y.name}</td>
                  <td>{y.domain}</td>
                  <td>{y.mailRestrictions}</td>
                  <td>{y._id}</td>
                  <button onClick={() => deletCorporate(y._id)}>DELETE</button>
                  <button onClick={() => editCorporate(y._id)}>EDIT</button>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export const MapStateToProps = (state: RootState) => {
  return {
    corporate: state.corporate,
  };
};

export default connect(MapStateToProps, null)(CorporateTable);
