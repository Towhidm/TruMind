export default function DashboardLoading() {
  return (
    <div className="w-full animate-pulse space-y-6">
      <div className="space-y-2">
        <div className="h-7 w-40 rounded-lg bg-purple-100" />
        <div className="h-4 w-72 max-w-full rounded bg-purple-50" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-purple-100 bg-white">
            <div className="h-36 bg-purple-100" />
            <div className="space-y-3 p-4">
              <div className="h-5 w-2/3 rounded bg-purple-50" />
              <div className="h-4 w-full rounded bg-purple-50" />
              <div className="h-4 w-4/5 rounded bg-purple-50" />
              <div className="h-9 w-full rounded-lg bg-purple-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
