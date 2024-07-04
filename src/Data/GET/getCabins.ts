import supabase from "../Supabase/Supabase";

export const getCabins = async () => {
  let { data, error } = await supabase
    .from("Cabins")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
  }

  return data;
};
