"use client";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  password: string;
  comfirmPassword: string;
}

export default function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { password: "", comfirmPassword: "" },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    console.log("RHF", data);

  let currentPassword: string = watch("password");
  return (
    <div>
      <h2 className="text-2xl font-semibold">Update password</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="transition-colors duration-300 w-full bg-white dark:bg-[#18212f] px-10 py-5 rounded-md"
      >
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f] my-3"
          {...register("password", {
            required: "Password is required..",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value:
                /^[A-Z]+[a-zA-Z]+[1-9]+[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:'",.<>\/?\\|`~]{7,20}$/,
              message:
                "Password must start with a capital and contain min a number and an symbol",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
        <br />
        <label htmlFor="password">Comfirm password</label>
        <input
          type="password"
          className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f] my-3"
          {...register("comfirmPassword", {
            required: "You should comfirm your password..",
            validate: {
              samePassword: (value) => value == currentPassword,
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
        <br />
        <div className="transition-colors duration-300 flex flex-row-reverse justify-start gap-3 w-full">
          <button
            className="transition-colors duration-300 text-slate-50 px-3 py-2 rounded bg-indigo-600 hover:bg-indigo-700 font-semibold"
            type="submit"
          >
            Update password
          </button>
          <button
            className="transition-colors duration-300 bg-white hover:bg-slate-50 rounded dark:hover:bg-[#18202a] dark:bg-[#1f2937] px-4 py-3 border border-slate-100 dark:border-[#374151] font-semibold"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
