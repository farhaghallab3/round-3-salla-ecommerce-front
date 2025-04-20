import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { saveToken, saveUser, signIn } from "@/utils/authFunc";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setToken, setUser } from "@/redux/slices/userSlice";

const loginSchema = z.object({
  email: z.string().email("ادخل بريد الكتروني صالح"),
  password: z.string().min(8, "كلمة المرور يجب ان تكون على الاقل 8 حروف"),
});

export const Login = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);
  if (localStorage.getItem("token") || user.id) {
    navigate("/");
  }

  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  type FormData = z.infer<typeof loginSchema>;

  const handleLogin = async (data: FormData) => {
    try {
      const response = await signIn(data.email, data.password);

      if (!response?.data?.token) {
        toast.error("بيانات الدخول غير صحيحة");
        return;
      }

      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));
      toast.success("تم تسجيل الدخول بنجاح");
      saveToken(response.data.token.access_token);
      saveUser(response.data.user);
    } catch (error) {
      toast.error("حدث خطأ اثناء انشاء الحساب");
      console.error(error);
    }
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
