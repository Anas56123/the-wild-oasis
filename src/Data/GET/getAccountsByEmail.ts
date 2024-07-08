import supabase from "../Supabase/Supabase";

export async function getAccountByEmail(email: string) {
  let { data, error } = await supabase
    .from("Accounts")
    .select("*")
    .eq("email", email);

  console.error({ error });
  return data;
}
