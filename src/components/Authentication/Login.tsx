
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";

// Define the schema using zod
const loginSchema = z.object({
  email: z.string().email("ادخل بريد الكتروني صالح"),
  password: z.string().min(8, "كلمة المرور يجب ان تكون على الاقل 8 حروف"),
});

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Initialize react-hook-form with zod schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  type FormData = z.infer<typeof loginSchema>;

  const handleLogin = (data: FormData) => {
    console.log(data);
    console.log("Email:", data.email);
    console.log("Password:", data.password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-[500px] flex flex-col gap-4"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h2>
        <div className="mb-4">
          <label
            className="block text-content-dark text-xl font-bold mb-2"
            htmlFor="email"
          >
            البريد الالكترونى
          </label>
          <Input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-content-dark text-xl leading-tight focus:outline-none focus:shadow-outline"
            placeholder="ادخل البريد الالكترونى"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 mt-2">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-content-dark text-xl font-bold mb-2"
            htmlFor="password"
          >
            كلمة المرور
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-content-dark text-xl leading-tight focus:outline-none focus:shadow-outline"
              placeholder="ادخل كلمة المرور"
              {...register("password")}
            />
            <button
              type="button"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye /> : <EyeClosed />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 mt-2">{errors.password.message}</p>
          )}
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <button
            type="submit"
            className="bg-button-primary hover:bg-button-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            تسجيل الدخول
          </button>

          <Link
            className="text-blue-500 border border-blue-500 py-2 px-4 rounded hover:text-blue-600"
            to="/register"
          >
            انشاء حساب جديد
          </Link>
        </div>
      </form>
    </div>
  );
};
