import supabase from "../Supabase/Supabase";

export async function getGuestsByID(id: number) {
  let { data, error } = await supabase.from("Guests").select("*").eq('id', id);
  if (error) {
    console.error(error);
    return;
  }
  return data;
}
