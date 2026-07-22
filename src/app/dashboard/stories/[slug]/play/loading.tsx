export default function PlayLoading() {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col justify-center animate-pulse space-y-4 py-4">
      <div className="h-6 w-48 rounded bg-purple-100" />
      <div className="h-2 w-full rounded-full bg-purple-50" />
      <div className="space-y-4 rounded-2xl border border-purple-100 bg-white p-6">
        <div className="h-4 w-28 rounded bg-purple-50" />
        <div className="h-4 w-full rounded bg-purple-50" />
        <div className="h-4 w-full rounded bg-purple-50" />
        <div className="h-4 w-5/6 rounded bg-purple-50" />
        <div className="ml-auto h-10 w-32 rounded-lg bg-purple-100" />
      </div>
    </div>
  );
}
