import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen bg-rose-50">
        {/* Card Container */}
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          {/* Left Side */}
          <div className="p-6 md:p-20">
            {/* Top Content */}
            <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
            <p className="max-w-sm mb-12 font-mulish font-light text-gray-600">
              Log in to your account to upload or download pictures, videos or
              music.
            </p>

            <input
              className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your email address"
            ></input>

            {/* Middle */}
            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
              <div className="font-thin text-cyan-700">Forgot password</div>

              <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-mulish font-bold text-white rounded-md  px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-12 border-b border-b-gray-300"></div>

            {/* Bottom */}
            <p className="py-6 text-sm font-thin text-center text-gray-400">
              or login with
            </p>

            {/* Bottom Buttons */}
            <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <button className="flex items-center justify-center py-2 space-x-3 border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                <img src="img/facebook.png" alt="" className="w-9" />
                <span className="font-thin">Facebook</span>
              </button>
              <button className="flex items-center justify-center py-2 space-x-3 border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                <img src="img/google.png" alt="" className="w-9" />
                <span className="font-thin">Google</span>
              </button>
            </div>
          </div>
          {/* Right Side */}
          <img
            src="img/image.jpg"
            alt="login"
            className="w-[430px] hidden md:block rounded-r-2xl"
          />

          {/* Close Button */}
          <div className="group absolute -top-5 right-4  flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-black group-hover:text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
