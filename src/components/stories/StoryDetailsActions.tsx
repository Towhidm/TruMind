"use client";

import { useRouter } from "next/navigation";
import { Button, Tag } from "antd";
import { Clock, Play } from "lucide-react";
import { startStory } from "@/actions/story.actions";
import { useState } from "react";

interface StoryDetailsActionsProps {
  slug: string;
  hasInProgress: boolean;
}

export default function StoryDetailsActions({ slug, hasInProgress }: StoryDetailsActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    setLoading(true);
    try {
      if (!hasInProgress) {
        await startStory(slug);
      }
      router.push(`/dashboard/stories/${slug}/play`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="primary"
      size="large"
      icon={<Play className="h-4 w-4" />}
      loading={loading}
      onClick={handleStart}
    >
      {hasInProgress ? "Resume Story" : "Start Story"}
    </Button>
  );
}
