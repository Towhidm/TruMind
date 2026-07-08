import { auth } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ResultScreen from "@/components/assessment/ResultScreen";
import { getAssessmentResult } from "@/actions/story.actions";
import type { PhqSeverity } from "@/lib/phq9/types";

interface Props {
  params: Promise<{ slug: string; assessmentId: string }>;
}

export default async function StoryResultPage({ params }: Props) {
  const session = await auth();
  if (!session) redirect("/");

  const { assessmentId } = await params;
  const result = await getAssessmentResult(assessmentId);
  if (!result) notFound();

  return (
    <DashboardLayout>
      <ResultScreen
        storyTitle={result.storyTitle}
        storySlug={result.storySlug}
        totalScore={result.totalScore}
        severity={result.severity as PhqSeverity}
        severityLabel={result.severityLabel}
        answers={result.answers}
        completedAt={result.completedAt}
      />
    </DashboardLayout>
  );
}
