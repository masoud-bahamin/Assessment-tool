import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup.string().min(3).email().max(50).required(),
  password: yup.string().min(3).max(50).required(),
});
