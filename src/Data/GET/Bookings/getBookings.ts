import supabase from "@/Data/Supabase/Supabase";

export const getBookings = async () => {
  let { data, error } = await supabase.from("Bookings").select("*");

  if (error) {
    console.log(error);
  }

  return data;
};
