import supabase from "../Supabase/Supabase";

export const getCabinsWithoutDiscount = async () => {
  let { data, error } = await supabase
    .from("Cabins")
    .select("*")
    .order("id", { ascending: true })
    .neq("discount", 0);

  if (error) {
    console.error(error);
  }

  return data;
};
