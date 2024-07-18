import supabase from "../Supabase/Supabase";

export async function insertAccount(isertedData: {
  email: string;
  password: string;
  userName: string;
  phone_number: string;
}) {
  const { data, error } = await supabase.auth.signUp({
    email: isertedData.email,
    password: isertedData.password,
    options: {
      data: {
        full_name: isertedData.userName,
        phone_number: isertedData.phone_number,
      },
    },
  });
}
