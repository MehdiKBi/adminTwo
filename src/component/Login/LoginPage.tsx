import "./LoginPage.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginPage() {


  const formik = useFormik<any>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      partner: Yup.string().required("email is required"),
      offer: Yup.string().required("password is required"),
    }),
    onSubmit: () => console.log("DONE!")
  });


  const handleSubmit = (e:any) => {
    e.preventDefault()
      console.log(formik.values);  
  }

  return (
    <div className="Login-page text-center mt-5">
      <form onSubmit={(e)=> handleSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="form-control"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
