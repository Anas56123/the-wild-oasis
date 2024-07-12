"use client";
import UpdateAccountForm from "@/Components/UpdateAccountForm";
import UpdatePasswordForm from "@/Components/UpdatePasswordForm";

function Home() {
  return (
    <div className="dark:text-white">
      <h1 className="text-3xl font-bold">Update your account</h1>
      <div>
        <UpdateAccountForm />
        <UpdatePasswordForm />
      </div>
    </div>
  );
}

export default Home;
