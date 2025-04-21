import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { signUp } from "@/utils/authFunc";
import toast from "react-hot-toast";
import { useAppSelector } from "@/redux/hooks";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "الاسم يجب ان يكون على الاقل 3 حروف")
      .max(20, "الاسم يجب ان يكون على الاكثر 20 حرف"),
    email: z.string().email("ادخل بريد الكتروني صالح"),
    password: z.string().min(8, "كلمة المرور يجب ان تكون على الاقل 8 احرف"),
    confirmPassword: z
      .string()
      .min(8, "كلمة المرور يجب ان تكون على الاقل 8 حروف"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "كلمة المرور غير متطابقة",
  });

export const Signup = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  if (user.id) {
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  type FormData = z.infer<typeof registerSchema>;

  const handleRegister = async (data: FormData) => {
    try {
      const response = await signUp(
        data.name,
        data.email,
        data.password,
        data.confirmPassword
      );
      console.log(response);
      toast.success("تم انشاء الحساب بنجاح");
      navigate("/signin");
    } catch (error) {
      toast.error("حدث خطأ اثناء انشاء الحساب");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-[500px] flex flex-col gap-4"
        onSubmit={handleSubmit(handleRegister)}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">انشاء حساب جديد</h2>
        <div className="mb-4">
          <label
            className="block text-content-dark text-xl font-bold mb-2"
            htmlFor="name"
          >
            الاسم
          </label>
          <Input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-content-dark text-xl leading-tight focus:outline-none focus:shadow-outline"
            placeholder="ادخل الاسم"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-red-500 mt-2">{errors.name.message}</p>
          )}
        </div>
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
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 mt-2">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
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
              {...register("password", { required: true })}
            />
            <button
              type="button"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <Eye /> : <EyeClosed />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 mt-2">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-content-dark text-xl font-bold mb-2"
            htmlFor="confirmPassword"
          >
            تأكيد كلمة المرور
          </label>
          <Input
            type="password"
            id="confirmPassword"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-content-dark text-xl leading-tight focus:outline-none focus:shadow-outline"
            placeholder="تأكيد كلمة المرور"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 mt-2">
              {errors.confirmPassword?.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <button
            type="submit"
            className="bg-button-primary hover:bg-button-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            انشاء حساب
          </button>

          <Link
            className="text-button-primary border border-button-primary py-2 px-4 rounded hover:text-button-primary-hover"
            to="/signin"
          >
            تسجيل الدخول
          </Link>
        </div>
      </form>
    </div>
  );
};
