import supabase from "../Supabase/Supabase";

export const getBookingsWithGuestsData = async (
  status: string,
  pagenation: Function,
) => {
  let { from, to } = pagenation();
  let { data, error, count } = await supabase
    .from("Bookings")
    .select("*, Guests(fullName, countryFlag, email)", {count: 'exact'})
    .or(`status.ilike.%${status}%`)
    .order("id", { ascending: true })
    .range(from, to);

  if (error) {
    console.error(error);
  }

  console.log(count);

  return {data, count};
};
