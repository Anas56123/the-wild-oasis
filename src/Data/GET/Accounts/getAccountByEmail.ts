import supabase from "../../Supabase/Supabase";

export async function getAccountByEmail(email: string) {
  let { data } = await supabase.from("Accounts").select("*").eq("email", email);
  return data;
}
