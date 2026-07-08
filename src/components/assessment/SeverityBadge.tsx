import { Tag } from "antd";
import type { PhqSeverity } from "@/lib/phq9/types";

const SEVERITY_COLORS: Record<PhqSeverity, string> = {
  minimal: "green",
  mild: "blue",
  moderate: "orange",
  moderately_severe: "volcano",
  severe: "red",
};

interface SeverityBadgeProps {
  severity: PhqSeverity;
  label: string;
}

export default function SeverityBadge({ severity, label }: SeverityBadgeProps) {
  return (
    <Tag color={SEVERITY_COLORS[severity]} className="text-sm">
      {label}
    </Tag>
  );
}
