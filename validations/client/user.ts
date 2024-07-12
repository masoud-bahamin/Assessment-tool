import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup.string().min(3).email().max(50).required(),
  password: yup.string().min(3).max(50).required(),
});
export const editFormSchema = yup.object({
  firstName: yup.string().min(2).max(50),
  lastName: yup.string().min(2).max(50),
  birthDate: yup.string().min(2).max(50),
  phone: yup.string().min(2).max(50),
  parent: yup.string().min(2).max(50),
});
