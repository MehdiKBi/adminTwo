import { useFormik } from "formik";
import { connect, useDispatch } from "react-redux";
import { searchCorporateAction } from "../redux/action/corporateAction";
import { RootState } from "../redux/rootReducers/rootReducers";

interface customProps {
  corporateList?: any;
}

function CorporateSearch({ corporateList }: customProps) {
  const dispatch = useDispatch();
  console.log("new searched list", corporateList);

  const formik = useFormik<any>({
    initialValues: {
      search: [],
    },
    onSubmit: () => console.log("CLICK"),
  });

  const handelSubmit = (e: any) => {
    e.preventDefault();
    console.log(formik.values.search);
    dispatch(searchCorporateAction(formik.values.search));
  };

  return (
    <div className="input">
      <form onSubmit={(e) => handelSubmit(e)}>
        <input
          style={{ width: "20em", height: "2.5em" }}
          type="text"
          name="search"
          placeholder="search"
          value={formik.values.search}
          onChange={formik.handleChange}
        />
        <button className="btn btn-danger">Search</button>
      </form>
    </div>
  );
}

const MapToStateProps = (state: RootState) => {
  return {
    corporateList: state.corporate,
  };
};

export default connect(MapToStateProps, null)(CorporateSearch);
