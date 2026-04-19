import { getSupabaseBrowserClient } from "./client";

export interface GalleryItemRow {
  id: string;
  title: string;
  image_url: string;
  created_at: string;
}

export async function listPublicGalleryItems(): Promise<GalleryItemRow[]> {
  const supabase = getSupabaseBrowserClient();

  if (!supabase) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from("gallery")
      .select("id,title,image_url,created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[supabase] Failed to load gallery items:", error.message);
      return [];
    }

    return data ?? [];
  } catch (error) {
    console.error("[supabase] Unexpected gallery query failure:", error);
    return [];
  }
}
