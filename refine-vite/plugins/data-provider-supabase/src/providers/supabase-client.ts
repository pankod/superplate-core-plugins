import { createClient } from "@refinedev/supabase";
import type { SupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "./constants";

export const supabaseClient: SupabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_KEY,
    {
        db: {
            schema: "public",
        },
        auth: {
            persistSession: true,
        },
    },
);
