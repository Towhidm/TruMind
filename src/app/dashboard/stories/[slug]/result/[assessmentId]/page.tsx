import { notFound } from "next/navigation";
import ResultScreen from "@/components/assessment/ResultScreen";
import { getAssessmentResult } from "@/actions/story.actions";
import type { PhqSeverity } from "@/lib/phq9/types";

interface Props {
  params: Promise<{ slug: string; assessmentId: string }>;
}

export default async function StoryResultPage({ params }: Props) {
  const { assessmentId } = await params;
  const result = await getAssessmentResult(assessmentId);
  if (!result) notFound();

  return (
    <ResultScreen
      storyTitle={result.storyTitle}
      storySlug={result.storySlug}
      totalScore={result.totalScore}
      severity={result.severity as PhqSeverity}
      severityLabel={result.severityLabel}
      answers={result.answers}
      completedAt={result.completedAt}
    />
  );
}
