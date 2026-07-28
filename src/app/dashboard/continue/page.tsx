import { redirect } from "next/navigation";
import { getContinueStorySlug } from "@/actions/nav.actions";

export default async function ContinueStoryPage() {
  const slug = await getContinueStorySlug();
  if (slug) {
    redirect(`/dashboard/stories/${slug}/play`);
  }
  redirect("/dashboard?notice=no-continue");
}
