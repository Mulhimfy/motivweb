import type { Metadata } from "next";
import DuaForm from "./DuaForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: "Send an anonymous dua 🤲",
    description: "Send a heartfelt dua — it stays between you and Allah.",
    // Self-canonical so shared dua links are not reported as duplicates of the
    // homepage. They stay out of the index via robots below.
    alternates: { canonical: `https://getilham.com/d/${id}` },
    robots: { index: false, follow: false },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DuaForm ownerId={id} />;
}
