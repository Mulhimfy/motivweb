import type { Metadata } from "next";
import DuaForm from "./DuaForm";

export const metadata: Metadata = {
  title: "Send an anonymous dua 🤲",
  description: "Send a heartfelt dua — it stays between you and Allah.",
  robots: { index: false, follow: false },
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DuaForm ownerId={id} />;
}
