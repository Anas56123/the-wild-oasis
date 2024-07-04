import supabase from "../Supabase/Supabase";

export const getBookings = async () => {
  let { data, error } = await supabase
    .from("Bookings")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
  }

  return data;
};
