"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, message } from "antd";
import { Play } from "lucide-react";
import { startStory } from "@/actions/story.actions";
import { useState } from "react";

interface StoryDetailsActionsProps {
  slug: string;
  hasInProgress: boolean;
  hasCompleted?: boolean;
}

export default function StoryDetailsActions({
  slug,
  hasInProgress,
  hasCompleted = false,
}: StoryDetailsActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (hasInProgress) {
    return (
      <Link href={`/dashboard/stories/${slug}/play`} prefetch>
        <Button type="primary" size="large" icon={<Play className="h-4 w-4" />}>
          Resume Story
        </Button>
      </Link>
    );
  }

  const handleStart = async () => {
    setLoading(true);
    try {
      await startStory(slug);
      router.push(`/dashboard/stories/${slug}/play`);
      router.refresh();
    } catch (error) {
      console.error(error);
      message.error("Could not start the story. Please try again.");
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
      {hasCompleted ? "Play Again" : "Start Story"}
    </Button>
  );
}
