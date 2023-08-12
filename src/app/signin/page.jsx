"use client";

import { Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import * as Yup from "yup";
import logo from "../../../public/signInSignup_page_logo.png";
import TextField from "../components/TextField";
import {
  Button,
  Card,
  Typography,
} from "../materialTailwindComponents/materialTailwindComponents";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
  phoneNumber: "",
  password: "",
};

const validateFormValues = Yup.object({
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "enter a valid phone number")
    .required("Please enter your phone number"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "password must contain 8 or more characters"),
});

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="w-full h-screen bg-[#3e57fa] py-10">
      <div className="flex justify-center align-middle mb-20">
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex justify-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h3" color="white">
            সাইন ইন
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validateFormValues}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {(formikProps) => {
              return (
                <form
                  className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                  onSubmit={formikProps.handleSubmit}
                >
                  <div
                    className={`mb-4 flex flex-col ${
                      formikProps.errors.phoneNumber ? "gap-8" : "gap-4"
                    } text-white`}
                  >
                    <div className="relative">
                      <Typography variant="paragraph" className="mb-2">
                        আপনার মোবাইল নাম্বার দিন
                      </Typography>
                      <TextField
                        size="lg"
                        type="text"
                        name="phoneNumber"
                        className={`!border !border-gray-200 bg-transparen shadow-lg text-white shadow-gray-700/5 ring-4 ring-transparent placeholder:text-gray-300 focus:!border-gray-300 focus:!border-t-gray-300 focus:ring-gray-700/10`}
                        placeholder="+৮৮০১৭৮৯****৯৩"
                        labelProps={{
                          className: "hidden",
                        }}
                      />
                    </div>

                    <div className="relative box-border">
                      <Typography variant="paragraph" className="mb-2">
                        পাসওয়ার্ড দিন
                      </Typography>
                      <TextField
                        size="lg"
                        name="password"
                        className="!border !border-gray-200 bg-transparen shadow-lg text-white shadow-gray-700/5 ring-4 ring-transparent placeholder:text-gray-300 focus:!border-gray-300 focus:!border-t-gray-300 focus:ring-gray-700/10"
                        type={showPassword ? "text" : "password"}
                        placeholder="পাসওয়ার্ড টাইপ করুন"
                        labelProps={{
                          className: "hidden",
                        }}
                      />
                      <div className="absolute right-3 bottom-[14px]">
                        {showPassword ? (
                          <BsEyeSlashFill
                            onClick={togglePasswordVisibility}
                            className="cursor-pointer"
                          />
                        ) : (
                          <BsEyeFill
                            onClick={togglePasswordVisibility}
                            className="cursor-pointer"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <Button
                    className={`${
                      formikProps.errors.password ? "mt-10" : "mt-7"
                    } bg-white font-sans`}
                    size="lg"
                    fullWidth
                    type="submit"
                  >
                    <div className="flex items-center justify-center gap-2 text-[#2B47FC]">
                      <Typography variant="paragraph" className="font-semibold">
                        সাইন ইন করুন
                      </Typography>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </Button>
                  <div className="flex justify-around align-middle mt-5">
                    <Typography
                      color="white"
                      className="mt-4 text-center font-sans"
                    >
                      একাউন্ট নেই?
                    </Typography>
                    <Typography
                      color="white"
                      className="mt-4 text-center font-sans"
                    >
                      <a href="#" className="font-medium text-white">
                        এখুনি একাউন্ট খুলুন
                      </a>
                    </Typography>
                  </div>
                </form>
              );
            }}
          </Formik>
        </Card>
      </div>
    </div>
  );
};

export default SignInPage;
