import supabase from "../Supabase/Supabase";

export async function insertURLBucket(
  file: File | null,
  userName: string,
  id: string
) {
  const avatarFile: File | null = file;
  const fileName: string = String(new Date().getTime()) + "-" + userName;
  const { data } = await supabase.storage
    .from("URL")
    .upload(fileName, avatarFile ? avatarFile : "", {
      cacheControl: "3600",
      upsert: false,
    });

  // const { error } = await supabase
  //   .from("Accounts")
  //   .update({ userName, avatar: fileName })
  //   .eq("id", id);
}
