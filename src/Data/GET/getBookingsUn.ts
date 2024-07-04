import supabase from "../Supabase/Supabase";

export const getBookingsUn = async () => {
  let { data, error } = await supabase
    .from("Bookings")
    .select("*")
    .order("id", { ascending: true })
    .eq("status", "unconfirmed");

  if (error) {
    console.error(error);
  }

  return data;
};
