import supabase from "../Supabase/Supabase";

export async function getGuests() {
  let { data, error } = await supabase.from("Guests").select("*");
  if (error) {
    console.error(error);
    return;
  }
  return data;
}
