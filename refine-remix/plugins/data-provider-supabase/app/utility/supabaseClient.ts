import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://iwdfzvfqbtokqetmbmbp.supabase.co";
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDU2NzAxMCwiZXhwIjoxOTQ2MTQzMDEwfQ._gr6kXGkQBi9BM9dx5vKaNKYj_DJN1xlkarprGpM_fU";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
