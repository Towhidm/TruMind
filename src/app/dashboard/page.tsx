import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StoryGrid from "@/components/stories/StoryGrid";
import { getStories } from "@/actions/story.actions";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/");

  const stories = await getStories();

  return (
    <DashboardLayout>
      <div className="w-full">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">TruMind</h2>
          <p className="mt-1 text-sm text-slate-500">
            Pick a story and step into a world that helps you understand yourself
          </p>
        </div>
        <StoryGrid stories={stories} />
      </div>
    </DashboardLayout>
  );
}
