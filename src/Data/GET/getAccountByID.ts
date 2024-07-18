import supabase from "../Supabase/Supabase";

export async function getAccountByID(id: string) {
  let { data, error } = await supabase
    .from("accounts")
    .select(`id,${id}`);

  console.error({ error });
  return data;
}
