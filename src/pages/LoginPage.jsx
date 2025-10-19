import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl w-96 p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="text-gray-500 text-sm">Sign in with open account</p>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100">
            <FcGoogle size={20} /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100">
            <FaApple size={20} /> Continue with Apple
          </button>

          {/* OR divider */}
          <div className="flex items-center justify-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Email */}
          <label className="text-gray-600 text-sm font-semibold">EMAIL</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 mb-4 focus:outline-none focus:ring-1 focus:ring-violet-600"
          />

          {/* Password */}
          <label className="text-gray-600 text-sm font-semibold">PASSWORD</label>
          <div className="relative mb-1">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-violet-600"
            />
            <IoEyeOutline
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <p className="text-right text-red-500 text-sm cursor-pointer hover:underline mb-4">
            Forgot password ?
          </p>

          <button className="w-full bg-violet-600 text-white font-semibold py-2 rounded-full hover:bg-violet-700 transition">
            Sign in
          </button>

          <p className="text-center text-gray-500 text-sm mt-5">
            Don’t have an account yet?{" "}
            <span className="text-violet-600 font-medium hover:underline cursor-pointer">
              Register here
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
