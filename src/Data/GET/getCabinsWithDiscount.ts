import supabase from "../Supabase/Supabase";

export const getCabinsWithDiscount = async () => {
  let { data, error } = await supabase
    .from("Cabins")
    .select("*")
    .order("id", { ascending: true })
    .is("discount", null);

  if (error) {
    console.error(error);
  }

  return data;
};
