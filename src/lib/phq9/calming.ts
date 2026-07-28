import type { PhqSeverity } from "./types";

/** Offer calming support when symptoms are more than mild. */
export function shouldOfferCalmingActivity(severity: PhqSeverity): boolean {
  return (
    severity === "moderate" ||
    severity === "moderately_severe" ||
    severity === "severe"
  );
}
