import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Packages",
  robots: { index: false },
};

export default function PackagesPage() {
  redirect("/offers");
}
