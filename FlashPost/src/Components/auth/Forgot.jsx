import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgot = () => {
  const resetpassword = async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    toast.info("Sending Email");
    try {
      const res = await axios.post(
        "https://back-e0rl.onrender.com/api/auth/password-rest",
        { email }
      );
      console.log(res);
      if (res.status === 200) {
        toast.success("Email Sent Successfully");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div>
      <main
        id="content"
        role="main"
        className="w-full max-w-md p-6 mx-auto mt-24 "
      >
        <div className="bg-white border-2 border-indigo-300 shadow-lg mt-7 rounded-xl dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Forgot password?
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?
                <Link
                  to={"/login"}
                  className="font-medium text-blue-600 decoration-2 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 ml-1 text-sm font-bold dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                    <p
                      className="hidden mt-2 text-xs text-red-600"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  <button
                    onClick={resetpassword}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition-all border border-transparent rounded-md text-primary hover:text-white bg-secondary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <p className="flex items-center justify-center mt-3 text-center divide-x divide-gray-300 dark:divide-gray-700">
          <a
            className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
            href="#"
            target="_blank"
          >
            <svg
              className="w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View Github
          </a>
          <a
            className="inline-flex items-center pl-3 text-sm text-gray-600 gap-x-2 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
            href="#"
          >
            Contact us!
          </a>
        </p>
      </main>

      <ToastContainer />
    </div>
  );
};

export default Forgot;
