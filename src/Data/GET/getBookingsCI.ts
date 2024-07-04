import supabase from "../Supabase/Supabase";

export const getBookingsCI = async () => {
  let { data, error } = await supabase
    .from("Bookings")
    .select("*")
    .order("id", { ascending: true })
    .eq("status", "check in");

  if (error) {
    console.error(error);
  }

  return data;
};
