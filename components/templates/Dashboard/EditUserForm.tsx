"use client";
import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { editFormSchema } from "@/validations/client/user";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface editForm {
  firstName: string;
  lastName: string;
  birthDate: string;
  phone: string;
  parent: string;
}

function EditUserForm() {
  const [userInfo, setUserInfo] = useState<null | userType>(null);

  const router = useRouter();

  const submitForm = async (formValues: editForm) => {
    try {
      const res = await fetch("/api/auth/edit", {
        method: "PUT",
        body: JSON.stringify(formValues),
      });
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          text: "updated successfully",
        });
        router.refresh();
      }
    } catch (error) {
      console.log("edit form catch", error);
    }
  };

  const getMe = async () => {
    try {
      const res = await fetch("api/auth/me");
      const data = await res.json();
      setUserInfo(data.user);
    } catch (error) {
      console.log("get me catch error in edit form page", error);
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  const intialValuesForm = {
    firstName: userInfo?.firstName || "",
    lastName: userInfo?.lastName || "",
    birthDate: userInfo?.birthDate || "",
    phone: userInfo?.phone || "",
    parent: userInfo?.parent || "",
  };

  if (!userInfo)
    return (
      <div className="flex justify-center items-center w-full min-h-[50vh]">
        <div className="loader"></div>
      </div>
    );

  return (
    <Formik
      onSubmit={(formValues) => {
        submitForm(formValues);
      }}
      initialValues={intialValuesForm}
      validationSchema={editFormSchema}
      className="text-sm text-text-200 lg:col-span-6"
    >
      {({ touched, errors }) => (
        <Form className="lg:col-span-6 grid grid-cols-1 lg:grid-cols-2">
          <div className="pr-10">
            {touched.firstName && errors.firstName ? (
              <p className="text-xs text-rose-400">{errors.firstName}</p>
            ) : null}
            <label className="mb-2 text-sm">First Name*</label>
            <Field
              type="text"
              name="firstName"
              className="block p-2 rounded-lg w-full border mb-4 placeholder:text-sm font-mono"
              placeholder={userInfo.firstName || "firstname"}
            />
            {touched.birthDate && errors.birthDate ? (
              <p className="text-xs text-rose-400">{errors.birthDate}</p>
            ) : null}
            <label className="mb-2 text-sm block w-80">
              Date & Place of Birth
            </label>
            <Field
              type="text"
              name="birthDate"
              className="block p-2 rounded-lg w-full border mb-4 placeholder:text-sm font-mono"
              placeholder={userInfo.birthDate || "04/18/2024"}
            />
            <label className="mb-2 text-sm">Email*</label>
            <Field
              type="email"
              name="email"
              className="block p-2 rounded-lg w-full border mb-4 placeholder:text-sm font-mono"
              placeholder={userInfo.email || "hello@example.com"}
            />
            <label className="mb-2 text-sm">Address*</label>
            <textarea
              rows={6}
              name="address"
              className="block p-2 rounded-lg w-full border mb-4 placeholder:text-sm font-mono"
            />
          </div>
          <div className="pr-10">
            {touched.lastName && errors.lastName ? (
              <p className="text-xs text-rose-400">{errors.lastName}</p>
            ) : null}
            <label className="mb-2 text-sm">Last Name*</label>
            <Field
              type="text"
              name="lastName"
              className="block p-2 rounded-lg w-full border mb-4 placeholder:text-sm font-mono"
              placeholder={userInfo.lastName || "lastname"}
            />
            {touched.parent && errors.parent ? (
              <p className="text-xs text-rose-400">{errors.parent}</p>
            ) : null}
            <label className="mb-2 text-sm block w-80">Parent Name*</label>
            <Field
              type="text"
              name="parent"
              className="block p-2 rounded-lg w-full border mb-4 placeholder:text-sm font-mono"
              placeholder={userInfo.parent || "Mana William"}
            />
            {touched.phone && errors.phone ? (
              <p className="text-xs text-rose-400">{errors.phone}</p>
            ) : null}
            <label className="mb-2 text-sm">Phone Number*</label>
            <Field
              type="text"
              name="phone"
              className="block p-2 rounded-lg w-full border mb-4 placeholder:text-sm font-mono"
              placeholder={userInfo.phone || "phone number"}
            />
          </div>
          <button
            className="px-8 py-2 rounded-lg mt-5 bg-primary-300 text-white w-fit"
            type="submit"
          >
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default EditUserForm;
