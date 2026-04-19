import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

function hasValidSupabaseEnv() {
  return typeof supabaseUrl === "string" && supabaseUrl.length > 0 && typeof supabaseAnonKey === "string" && supabaseAnonKey.length > 0;
}

let warnedMissingEnv = false;

function logMissingEnvOnce() {
  if (warnedMissingEnv) return;
  warnedMissingEnv = true;
  console.error(
    "[supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Public catalog calls will fall back to empty results."
  );
}

export function getSupabaseBrowserClient(): SupabaseClient | null {
  if (!hasValidSupabaseEnv()) {
    logMissingEnvOnce();
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
}
