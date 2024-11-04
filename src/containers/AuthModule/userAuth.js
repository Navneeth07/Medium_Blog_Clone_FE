import React, { useState } from "react";
import CustomModal from "../../components/CustomModal";
import { GoogleLogin } from "@react-oauth/google";
import { emailRegex } from "../../constants/regexConstants";
import { arrowLeft, mail } from "../../images";
import { useNavigate } from "react-router-dom";

export const Authentication = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const [isSignIn, setIsSignIn] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [emailSignIn, setEmailSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onClose = () => {
    navigate("/")
    setIsOpen(false);
    setIsSignIn(false);
    setIsSignUp(false);
    setEmailSignIn(false);
  };

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const onSignInWithEmailClick = () => {
    setIsSignIn(false);
    setIsSignUp(false);
    setEmailSignIn(true);
    setEmail("")
  };

  const onEmailInput = (e) => {
    let val = e.target.value;
    if (emailRegex.test(val)) {
      setShowErrorMessage(false);
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    setEmail(val);
  };

  const onContinueClick = () => {
    if (email != "" && validEmail) {
      // apiCall
      return;
    }
    setShowErrorMessage(true);
  };

  return (
    <>
      <CustomModal isOpen={isOpen} onClose={onClose}>
        {isSignIn && (
          <>
            <div className="flex flex-col justify-center items-center p-5">
              <h2 className="text-black-700 text-3xl text-center">
                Welcome Back
              </h2>
              <div className="mt-10 w-[300px] text-center">
                <GoogleLogin
                  onSuccess={responseMessage}
                  onError={errorMessage}
                  useOneTap
                  shape="circle"
                />
                <div
                  className="mt-5 flex flex-row border-zinc-300 border rounded-full px-3 py-1.5"
                  onClick={() => onSignInWithEmailClick()}
                >
                  <img src={mail} alt="hi" className="flex-none"></img>
                  <button className="rounded text-center text-sm flex-1 text-btn-color">
                    Sign in with email
                  </button>
                </div>
                <div className="mt-5">
                  No account?
                  <a
                    className="text-green-700 font-bold ml-1 cursor-pointer"
                    onClick={() => {
                      setIsSignIn(false), setIsSignUp(true);
                    }}
                  >
                    Create one
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
        {isSignUp && (
          <>
            <div className="flex flex-col justify-center items-center p-5">
              <h2 className="text-black-700 text-3xl text-center">
                Join Medium.
              </h2>
              <div className="mt-10 w-[300px] text-center">
                <GoogleLogin
                  onSuccess={responseMessage}
                  onError={errorMessage}
                  useOneTap
                  shape="circle"
                  text="signup_with"
                />
                <div
                  className="mt-5 flex flex-row border-zinc-300 border rounded-full px-3 py-1.5"
                  onClick={() => onSignInWithEmailClick()}
                >
                  <img src={mail} alt="mail" className="flex-none"></img>
                  <button className="rounded text-sm text-center flex-1 text-btn-color">
                    Sign Up with email
                  </button>
                </div>
                <div className="mt-5">
                  Already have an account?
                  <a
                    className="text-green-700 font-bold ml-1 cursor-pointer"
                    onClick={() => {
                      setIsSignUp(false), setIsSignIn(true);
                    }}
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
        {emailSignIn && (
          <>
            <div className="flex flex-col justify-center items-center p-5">
              <h2 className="text-black-700 text-3xl text-center">
                Sign up with email
              </h2>
              <h6 className="mt-10 text-md">
                Enter your email address to create an account.
              </h6>
              <div className="mt-10 w-[300px] text-center">
                <p className="text-md">Your email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => onEmailInput(e)}
                  className="bg-gray-100 outline-none p-2 text-center"
                />
                {showErrorMessage && (
                  <p className="mt-2 text-sm text-red-600">
                    Please enter valid email address
                  </p>
                )}
              </div>
              <div className="mt-10 w-[200px] text-center">
                <button
                  className="bg-black text-white rounded-full p-2 w-full"
                  onClick={onContinueClick}
                >
                  Continue
                </button>
              </div>
              <div className="mt-5 text-center flex flex-row cursor-pointer">
                <img src={arrowLeft} alt="arrow"></img>
                <a
                  className="text-green-700 ml-1"
                  onClick={() => {
                    setIsSignIn(false),
                      setEmailSignIn(false),
                      setIsSignUp(true);
                  }}
                >
                  All sign up options
                </a>
              </div>
            </div>
          </>
        )}
      </CustomModal>
    </>
  );
}