import supabase from "../Supabase/Supabase";

export const getCabinsWithoutDiscount = async () => {
  let { data, error } = await supabase
    .from("Cabins")
    .select("*")
    .order("id", { ascending: true })
    .gt("discount", 0);

  if (error) {
    console.error(error);
  }

  return data;
};
