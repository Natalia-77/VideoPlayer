import * as yup from "yup";

export const RegisterValidationSchema = yup.object({
  email: yup
    .string()
    .email("Enter valid Email")
    .required("Field can't be empty"),
  name: yup.string().required("Field can't be empty"),
  password: yup
    .string()
    .required("Field can't be empty")
    .min(5, "Must contains no less 5 symbols")
    .matches(/[0-9]/, "Must contains at least one digit"),
  confirmPassword: yup
    .string()
    .required("Field can't be empty")
    .oneOf([yup.ref("password")], "Your passwords do not match"),
});
