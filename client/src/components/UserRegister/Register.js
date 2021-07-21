import { useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";

const Register = () => {
  const [isSignUp, setisSignUp] = useState(false);
  const toggle = () => {
    setisSignUp(!isSignUp);
  };
  return (
    <div>
      <div className="lg:flex">
        <div className="lg:w-full xl:w-full ">
          <div className="my-6 mx-auto px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-12 xl:px-24 xl:max-w-2xl ">
            <h2
              className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
            >
              {isSignUp ? `SignUp` : `LogIn`}
            </h2>
            <div className="mt-8">
              <form>
                {isSignUp && (
                  <div className="my-8">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Username
                    </div>
                    <input
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                      type=""
                      placeholder="Mike Top"
                    />
                  </div>
                )}
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder="mike@gmail.com"
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                    {isSignUp ? (
                      ` `
                    ) : (
                      <div>
                        <a
                          className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    )}
                  </div>

                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder="Enter password"
                  />
                </div>
                {isSignUp && (
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold text-gray-700 tracking-wide">
                        Confirm Password
                      </div>
                    </div>
                    <input
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                      type=""
                      placeholder="Confirm password"
                    />
                  </div>
                )}
                <div className="mt-8">
                  <button
                    className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
                  >
                    {isSignUp ? `SignUp` : `LogIn`}
                  </button>
                </div>
                <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center">
                {isSignUp
                  ? `Already have an account ? `
                  : `Don't have an account ?`}
                <span
                  onClick={toggle}
                  className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                >
                  {isSignUp ? `SignIn` : `SignUp`}
                </span>
              </div>
                <div className="mt-4">
                  <hr />
                </div>
                <div className="mt-4 lg:flex">
                  <GoogleLoginButton style={{margin:'auto'}}>
                    <span>Login With Google</span>
                  </GoogleLoginButton>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
