import supabase from "../Supabase/Supabase";

export async function insertURLBucket(file: File, userName: string, id: number){
  const avatarFile: File = file;
  const fileName: string = String(new Date().getTime()) + "-" + userName;
  const { data } = await supabase.storage
    .from("URL")
    .upload(fileName, avatarFile, {
      cacheControl: "3600",
      upsert: false,
    });

  const { error } = await supabase
    .from("Accounts")
    .update({ userName, avatar: fileName})
    .eq("id", id);
}
