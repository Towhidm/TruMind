import PublicHeader from "@/components/public/PublicHeader";
import MarketingBackground from "@/components/public/MarketingBackground";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      <MarketingBackground />
      <div className="relative z-10 flex min-h-[100dvh] flex-col">
        <PublicHeader />
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
      </div>
    </div>
  );
}
