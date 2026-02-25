import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Name required"),
  email: yup.string().email("Invalid email").required("Email required"),
  city: yup.string().required("City required"),
  pincode: yup.string().required("Pincode required"),
  password: yup.string().min(6, "Min 6 characters"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
});