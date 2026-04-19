import { getSupabaseBrowserClient } from "./client";

export interface ProductRow {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  created_at: string;
}

export async function listPublicProducts(): Promise<ProductRow[]> {
  const supabase = getSupabaseBrowserClient();

  if (!supabase) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from("products")
      .select("id,name,description,price,image_url,created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[supabase] Failed to load products:", error.message);
      return [];
    }

    return data ?? [];
  } catch (error) {
    console.error("[supabase] Unexpected products query failure:", error);
    return [];
  }
}
