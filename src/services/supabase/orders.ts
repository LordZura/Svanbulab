import { getSupabaseBrowserClient } from "./client";

export interface CreateOrderInput {
  customer_name: string;
  customer_email: string;
  details: string;
}

export async function createOrder(input: CreateOrderInput): Promise<{ ok: true } | { ok: false; reason: string }> {
  const supabase = getSupabaseBrowserClient();

  if (!supabase) {
    return { ok: false, reason: "Supabase is not configured" };
  }

  try {
    const { error } = await supabase.from("orders").insert(input);

    if (error) {
      console.error("[supabase] Failed to create order:", error.message);
      return { ok: false, reason: error.message };
    }

    return { ok: true };
  } catch (error) {
    console.error("[supabase] Unexpected order creation failure:", error);
    return { ok: false, reason: "Unexpected error" };
  }
}
