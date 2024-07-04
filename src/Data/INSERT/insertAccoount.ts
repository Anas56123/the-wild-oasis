import supabase from "../Supabase/Supabase";

export async function insertAccount(isertedData: object) {
  const { data, error } = await supabase
    .from("Accounts")
    .insert([isertedData])
    .select();
}
