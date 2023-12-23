import * as Yup from "yup";

export const singUpSchema = Yup.object({
    firstName:Yup.string().min(2).max(30).required("Please Enter Your Name"),
    lastName:Yup.string().min(3).max(25).required("Please Enter Your last Name"),
    email : Yup.string().email().required("Please Enter Your Email"),
    phone : Yup.number().required("Please Enter Your Phone Number"),
    password : Yup.string().min(6).required("Please Enter your Password"),
    confirmpassword : Yup.string().required().oneOf([Yup.ref("password"),null],"Password Must match"),
})
