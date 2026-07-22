import AnalyticsDashboard from "@/components/assessment/AnalyticsDashboard";
import { getAnalytics } from "@/actions/analytics.actions";

export default async function AnalyticsPage() {
  const data = await getAnalytics();

  return (
    <div className="w-full">
      <div className="mb-6 sm:mb-8">
        <p className="text-sm text-slate-500">Your mental health journey over time</p>
      </div>
      <AnalyticsDashboard data={data} />
    </div>
  );
}
