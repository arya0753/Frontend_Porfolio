// validation/contactSchema.js
import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  description: yup.string().required("Message is required"),
});
