import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AnalyticsDashboard from "@/components/assessment/AnalyticsDashboard";
import { getAnalytics } from "@/actions/analytics.actions";

export default async function AnalyticsPage() {
  const session = await auth();
  if (!session) redirect("/");

  const data = await getAnalytics();

  return (
    <DashboardLayout>
      <div className="w-full">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">Analytics</h2>
          <p className="mt-1 text-sm text-slate-500">Your mental health journey over time</p>
        </div>
        <AnalyticsDashboard data={data} />
      </div>
    </DashboardLayout>
  );
}
