"use client";

import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold text-white">
          Welcome back
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Sign in to continue
        </p>
      </div>

      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="space-y-5"
      >
        {/* Email */}
        <div>
          <label className="text-sm text-gray-300">Email</label>
          <div className="relative mt-1 group">
            <Mail className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-blue-400" size={18} />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl bg-slate-800/60 text-white px-11 py-3 outline-none border border-white/10 focus:border-blue-500 transition"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-300">Password</label>
          <div className="relative mt-1 group">
            <Lock className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-blue-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full rounded-xl bg-slate-800/60 text-white px-11 pr-14 py-3 outline-none border border-white/10 focus:border-blue-500 transition"
              {...register("password", { required: "Password is required" })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-400 hover:text-white transition"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-400 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-white font-semibold hover:opacity-90 transition shadow-lg shadow-blue-600/30"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 pt-4">
          Don’t have an account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </form>
    </>
  );
}
