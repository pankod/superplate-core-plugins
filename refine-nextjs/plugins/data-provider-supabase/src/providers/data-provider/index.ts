"use client";

import { dataProvider as dataProviderSupabase } from "@refinedev/supabase";
import { supabaseClient } from "@utility/supabase-client";

export const dataProvider = dataProviderSupabase(supabaseClient);
