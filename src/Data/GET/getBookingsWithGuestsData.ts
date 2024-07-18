import supabase from "../Supabase/Supabase";

export const getBookingsWithGuestsData = async (
  status: string,
  pagenation: Function
):  Promise<{ data: any, count: number | null }> => {
  let { from, to } = pagenation();
  let { data, error, count } = await supabase
    .from("Bookings")
    .select("*, Guests(full_name, countryFlag, email)", { count: "exact" })
    .or(`status.ilike.%${status}%`)
    .order("id", { ascending: true })
    .range(from, to);

  if (error) {
    console.error(error);
  }

  console.log(count);

  return { data, count };
};
