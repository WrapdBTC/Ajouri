import { PageShell } from "@/components/PageShell";

export default function SabineLayout({ children }: { children: React.ReactNode }) {
  return <PageShell theme="sabine">{children}</PageShell>;
}
