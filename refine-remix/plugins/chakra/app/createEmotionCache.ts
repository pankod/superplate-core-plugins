import createCache from "@emotion/cache";

export default function createEmotionCache() {
    return createCache({ key: "cha" });
}

export const defaultCache = createEmotionCache();
