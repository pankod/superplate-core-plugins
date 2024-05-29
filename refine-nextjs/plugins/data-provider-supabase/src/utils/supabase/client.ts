import { createBrowserClient } from "@supabase/ssr";
import { SUPABASE_KEY, SUPABASE_URL } from "./constants";

export const supabaseBrowserClient = createBrowserClient(
    SUPABASE_URL,
    SUPABASE_KEY,
    {
        db: {
            schema: "public",
        },
    },
);
