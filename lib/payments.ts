export type PlanKey = "FREE" | "STARTER" | "PRO" | "ELITE";

export const PLAN_LINKS: Record<PlanKey, string> = {
  FREE: process.env.NEXT_PUBLIC_FREE_LINK || "",
  STARTER: process.env.NEXT_PUBLIC_STARTER_LINK || "",
  PRO: process.env.NEXT_PUBLIC_PRO_LINK || "",
  ELITE: process.env.NEXT_PUBLIC_ELITE_LINK || "",
};

export function getPlanHref(key: PlanKey): string {
  return PLAN_LINKS[key] || "";
}
