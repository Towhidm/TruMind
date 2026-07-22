export default function AnalyticsLoading() {
  return (
    <div className="w-full animate-pulse space-y-6">
      <div className="space-y-2">
        <div className="h-7 w-36 rounded-lg bg-purple-100" />
        <div className="h-4 w-64 rounded bg-purple-50" />
      </div>
      <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 rounded-2xl bg-gradient-to-br from-purple-200 to-purple-100" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="h-64 rounded-2xl border border-purple-100 bg-white" />
        <div className="h-64 rounded-2xl border border-purple-100 bg-white" />
      </div>
    </div>
  );
}
