import supabase from "../Supabase/Supabase";

export const getBookingsWithGuestsData = async (status: string) => {
  let { data, error } = await supabase
    .from("Bookings")
    .select("*, Guests(fullName, countryFlag)")
    .or(`status.ilike.%${status}%`)
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
  }

  return data;
};
