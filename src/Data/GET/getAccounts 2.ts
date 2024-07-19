import supabase from "../Supabase/Supabase";

export async function getAccounts() {
  let { data, error } = await supabase.auth.getSession();

  console.error({ error });
  return data;
}
