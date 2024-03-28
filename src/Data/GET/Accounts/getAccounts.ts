import supabase from "../../Supabase/Supabase";

export async function getAccounts() {
  let { data, error } = await supabase.from("Accounts").select("email");
  if (error) {
    console.error(error);
    return;
  }
  return data;
}
