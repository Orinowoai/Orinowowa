import { redirect } from "next/navigation";
export default function PricingRedirect() {
  redirect("/plans");
  return null;
}
