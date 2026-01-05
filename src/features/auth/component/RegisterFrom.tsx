"use client";

import { useForm } from "react-hook-form";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } =
    useForm<RegisterFormInputs>();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: RegisterFormInputs) => {
    console.log("Register Data:", data);
    // 🔐 Call register API here
  };

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Create your account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {/* NAME */}
        <div>
          <label className="text-sm text-gray-600">Full Name</label>
          <div className="relative mt-1">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              {...register("name", { required: "Name is required" })}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <div className="relative mt-1">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <div className="relative mt-1">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="8+ characters"
              className="w-full rounded-lg border border-gray-300 px-10 pr-12 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer">
            Sign in
          </span>
        </p>
      </form>
    </>
  );
}
