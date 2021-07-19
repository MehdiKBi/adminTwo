import React from "react";
import formik, { useFormik } from "formik";
import InputFormik from "./InputFormik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addChecklistAction } from "../redux/action/checklistAction";
import { useHistory, useLocation } from "react-router-dom";

function AddChecklist() {
  const dispatch = useDispatch();
  const history = useHistory()
  const location = useLocation()

  const formik = useFormik<any>({
    initialValues: {
      patner: "",
      offer: "",
      status: "",
    },
    validationSchema: Yup.object({
      partner: Yup.string().required("partner is required"),
      offer: Yup.string().required("offer is required"),
      satus: Yup.string().required("status is required"),
    }),
    // handle form submitting
    onSubmit: () => console.log("CHECKLIST SUBMIT"),
  });


  const backTomainPage = () => {
    setTimeout(() => {
      if (location.pathname === "/checklist") {
        history.go(0)
      }
    }, 500);
  };

  const handelSubmit = (e: any) => {
    e.preventDefault();
    if (!formik.dirty) {
      alert("INPUT IS EMPTY")
    } else {
      console.log(formik.values);
      backTomainPage();
      // dispatch(addChecklistAction(1))
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handelSubmit(e)}>
        <InputFormik
          value={formik.values.patner}
          handleChange={formik.handleChange}
          name="patner"
          placeholder="patner"
        />
        <InputFormik
          value={formik.values.offer}
          handleChange={formik.handleChange}
          name="offer"
          placeholder="offer"
        />
        <InputFormik
          value={formik.values.status}
          handleChange={formik.handleChange}
          name="status"
          placeholder="status"
        />
        <button className="btn btn-danger mt-5 text-center">SUBMIT</button>
      </form>
    </div>
  );
}

export default AddChecklist;
