import supabase from "@/Data/Supabase/Supabase";

export const getCabins = async () => {
  let { data, error } = await supabase.from("Cabins").select("*");

    if (error) {
        console.error(error);
    }

  return data
};
