import { useFormik } from "formik";
import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import { addcorporateAction } from "../redux/action/corporateAction";
import { RootState } from "../redux/rootReducers/rootReducers";
import InputFormik from "./InputFormik";

interface defaultState {
  corporatList?: any;
}

function AddCorporate({ corporatList }: defaultState) {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const formik = useFormik<any>({
    initialValues: {
      name: "",
      domain: "",
      notiz: "",
      launch: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      domain: Yup.string().required("domain is required"),
    }),
    // handle form submitting
    onSubmit: () => console.log("CLICK"),
  });

  const backTomainPage = () => {
    setTimeout(() => {
      if (location.pathname === "/corporate") {
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
      dispatch(addcorporateAction(formik.values))
      // backTomainPage();
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={(e) => handelSubmit(e)}>
        <InputFormik
          value={formik.values.name}
          name="name"
          handleChange={formik.handleChange}
          placeholder="name"
        />
        <InputFormik
          value={formik.values.domain}
          name="domain"
          handleChange={formik.handleChange}
          placeholder="domain"
        />
        <InputFormik
          value={formik.values.notiz}
          name="notiz"
          handleChange={formik.handleChange}
          placeholder="notiz"
        />
        <InputFormik
          value={formik.values.launch}
          name="launch"
          handleChange={formik.handleChange}
          placeholder="launch"
        />
        {/* <InputFormik
         value={formik.values.eingereicht}
         name="eingereicht"
          handleChange={formik.handleChange}
          placeholder="eingereicht"
        />
          <InputFormik
         value={formik.values.deadline}
         name="deadline"
          handleChange={formik.handleChange}
          placeholder="deadline"
        />
          <InputFormik
         value={formik.values.paket}
         name="paket"
          handleChange={formik.handleChange}
          placeholder="paket"
        />
          <InputFormik
         value={formik.values.interneAngebote}
         name="interneAngebote"
          handleChange={formik.handleChange}
          placeholder="interneAngebote"
        />
          <InputFormik
         value={formik.values.blacklist}
         name="blacklist"
          handleChange={formik.handleChange}
          placeholder="blacklist"
        />
          <InputFormik
         value={formik.values.startguthaben}
         name="startguthaben"
          handleChange={formik.handleChange}
          placeholder="startguthaben"
        />
          <InputFormik
         value={formik.values.mailRestrictions}
         name="mailRestrictions"
          handleChange={formik.handleChange}
          placeholder="mailRestrictions"
        />
          <InputFormik
         value={formik.values.secureCode}
         name="secureCode"
          handleChange={formik.handleChange}
          placeholder="secureCode"
        />
            <InputFormik
         value={formik.values.secureCodeCheck}
         name="secureCodeCheck"
          handleChange={formik.handleChange}
          placeholder="secureCodeCheck"
        />
         
         <InputFormik
         value={formik.values.sieDu}
         name="sieDu"
          handleChange={formik.handleChange}
          placeholder="sieDu"
        />
         
         <InputFormik
         value={formik.values.imageKey}
         name="imageKey"
          handleChange={formik.handleChange}
          placeholder="imageKey"
        /> */}

        <button className="btn btn-danger mt-5">ADD CORPORATE</button>
      </form>
    </div>
  );
}
export const mapStateToProps = (state: RootState) => {
  return {
    corporatList: state.corporate,
  };
};

export default connect(mapStateToProps, null)(AddCorporate);
