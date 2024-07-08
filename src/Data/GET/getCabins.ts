import supabase from "../Supabase/Supabase";

export const getCabins = async (WithOrWithout: "number" | "all" | null) => {
  let { dataf, errorf }: {dataf: any, errorf: any} = { dataf: null, errorf: null };

  if (WithOrWithout === 'number') {
    let { data, error } = await supabase
      .from("Cabins")
      .select("*")
      .order("id", { ascending: true })
      .is("discount", null);
      dataf = data
      errorf = error
  } else if (WithOrWithout === "all") {
    let { data, error } = await supabase
      .from("Cabins")
      .select("*")
      .order("id", { ascending: true });
      dataf = data
      errorf = error
  } else if (WithOrWithout === null) {
    let { data, error } = await supabase
      .from("Cabins")
      .select("*")
      .order("id", { ascending: true })
      .gt("discount", 0);
      dataf = data
      errorf = error
  }
  if (errorf) {
    console.error(errorf);
  }

  return dataf;
};
