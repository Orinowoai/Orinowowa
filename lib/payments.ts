export const PLAN_LINKS = {
  FREE: process.env.NEXT_PUBLIC_FREE_LINK || "",
  STARTER: process.env.NEXT_PUBLIC_STARTER_LINK || "",
  PRO: process.env.NEXT_PUBLIC_PRO_LINK || "",
  ELITE: process.env.NEXT_PUBLIC_ELITE_LINK || "",
};
export function getPlanHref(key: keyof typeof PLAN_LINKS) {
  return PLAN_LINKS[key] || "";
}
