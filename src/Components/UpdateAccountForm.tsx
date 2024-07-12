"use client";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  fullName: string;
  file: File | null;
}

export default function UpdateAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { fullName: "", file: null },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    console.log("RHF", data);

  return (
    <div>
      <h2 className="text-2xl font-semibold">Update user data</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="transition-colors duration-300 w-full bg-white dark:bg-[#18212f] px-10 py-5 rounded-md"
      >
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          className="transition-colors duration-300 cursor-not-allowed rounded dark:text-[#9ca3af] border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#374151] my-3"
          disabled
          value={String(localStorage.getItem("email"))}
        />
        <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
        <br />
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f] my-3"
          {...register("fullName", {
            required: "Full name is required..",
            minLength: {
              value: 3,
              message: "Full name must be at least 3 characters",
            },
            pattern: {
              value: /^[a-zA-Z]/,
              message: "Full Name must be only letters",
            },
          })}
        />
        {errors.fullName && (
          <p className="text-red-500">{errors.fullName.message}</p>
        )}
        <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
        <br />
        <input
          type="file"
          className="transition-colors duration-300 file:border-0 file:text-slate-50 file:px-3 file:py-2 file:rounded file:bg-indigo-600 hover:file:bg-indigo-700 file:font-semibold"
          {...register("file", {
            required: "Please upload a file",
            pattern: {
              value: /(\.jpg|\.jpeg|\.png)$/,
              message:
                "Please upload a valid image file such as a PNG or JPEG or JPG",
            },
          })}
        />
        <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
        <br />
        <div className="transition-colors duration-300 flex flex-row-reverse justify-start gap-3 w-full">
          <button
            className="transition-colors duration-300 text-slate-50 px-3 py-2 rounded bg-indigo-600 hover:bg-indigo-700 font-semibold"
            type="submit"
          >
            Update Account
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
