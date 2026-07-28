import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import MobileNav from "@/components/dashboard/MobileNav";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="flex h-[100dvh] overflow-hidden bg-[#f7f6ff]">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex w-full flex-1 flex-col overflow-x-hidden overflow-y-auto p-4 pb-24 sm:p-6 md:p-8 lg:pb-8">
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
