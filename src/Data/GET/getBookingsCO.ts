import supabase from "../Supabase/Supabase";

export const getBookingsCO = async () => {
  let { data, error } = await supabase
    .from("Bookings")
    .select("*")
    .order("id", { ascending: true })
    .eq("status", "check out");

  if (error) {
    console.error(error);
  }

  return data;
};
