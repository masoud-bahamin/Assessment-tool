"use client";

import { registerSchema } from "@/validations/client/user";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function Signin() {
  const router = useRouter();
  const loginUser = async (email: string, password: string) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        text: "register successfull",
      });
      router.push("/dashboard");
      router.refresh();
    } else {
      const data = await res.json();
      Swal.fire({
        icon: "error",
        text: data.error,
      });
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full text-text-200">
        <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Welcome Back!</h1>
          <Formik
            onSubmit={(values) => loginUser(values.email, values.password)}
            initialValues={{ email: "", password: "" }}
            validationSchema={registerSchema}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  {errors.email && touched.email && (
                    <p className="text-accent-200 text-sm">{errors.email}</p>
                  )}
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-primary-300 focus:border-primary-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  {errors.password && touched.password && (
                    <p className="text-accent-200 text-sm">{errors.password}</p>
                  )}
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-primary-300 focus:border-primary-300"
                    placeholder="Enter your password"
                  />
                  <a
                    href="#"
                    className="text-xs text-gray-600 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 rounded border-gray-300 text-primary-300 focus:ring-primary-300 focus:outline-none"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="/signup"
                    className="text-xs text-primary-300 hover:text-text-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300"
                  >
                    Create Account?
                  </Link>
                </div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-300 hover:bg-text-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300"
                >
                  Sign In
                  {isSubmitting ? (
                    <div className=" animate-spin w-4 h-4 border rounded-full ml-2">
                      .
                    </div>
                  ) : null}
                </button>
              </Form>
            )}
          </Formik>
          <div>
            <table className="mt-6">
              <tbody className="text-xs">
                <tr>
                  <td className="pr-4">user</td>
                  <td className="pr-4">Email : user@gmail.com</td>
                  <td className="pr-4">Password: 123456</td>
                </tr>
                <tr>
                  <td className="pr-4">Teacher</td>
                  <td className="pr-4">Email : david@gmail.com</td>
                  <td className="pr-4">Password: 123456</td>
                </tr>
                <tr>
                  <td className="pr-4">Admin</td>
                  <td className="pr-4">Email : masoud@gmail.com</td>
                  <td className="pr-4">Password: 123456</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
