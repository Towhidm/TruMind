"use client";

import { Button } from "antd";
import type { StoryChoice, StoryScene } from "@/lib/story-engine/types";

interface SceneRendererProps {
  scene: StoryScene;
  chapterTitle: string;
  chapterNum: number;
  totalChapters: number;
  onNext: () => void;
  onChoice: (choice: StoryChoice) => void;
  isSaving: boolean;
}

const sceneIntro: Partial<Record<StoryScene["type"], string>> = {
  memory: "A memory floats back...",
  discovery: "You notice something...",
  tension: "Everything slows down...",
  reflection: "You pause for a breath...",
};

export default function SceneRenderer({
  scene,
  chapterTitle,
  chapterNum,
  totalChapters,
  onNext,
  onChoice,
  isSaving,
}: SceneRendererProps) {
  const intro = scene.prompt ?? sceneIntro[scene.type];

  return (
    <div className="w-full max-w-3xl rounded-2xl border border-purple-100 bg-white p-5 shadow-sm sm:p-6 md:max-w-2xl md:p-8">
      <div className="mb-4 flex flex-col gap-1 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs font-medium text-purple-500">
          Chapter {chapterNum} of {totalChapters}
        </span>
        <span className="text-xs text-slate-400 sm:text-right">{chapterTitle}</span>
      </div>

      {scene.type === "narration" && (
        <p className="text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">{scene.content}</p>
      )}

      {scene.type === "dialogue" && scene.lines && (
        <div className="space-y-4">
          {scene.lines.map((line, i) => (
            <div key={i} className="rounded-xl bg-purple-50/60 p-4">
              <span className="mb-1 block text-xs font-semibold text-purple-600">
                {line.speaker}
              </span>
              <p className="leading-relaxed text-slate-700">{line.text}</p>
            </div>
          ))}
        </div>
      )}

      {(scene.type === "reflection" ||
        scene.type === "memory" ||
        scene.type === "discovery" ||
        scene.type === "tension") && (
        <div
          className={`rounded-xl border p-5 ${
            scene.type === "tension"
              ? "border-orange-100 bg-orange-50/40"
              : scene.type === "discovery"
                ? "border-blue-100 bg-blue-50/40"
                : scene.type === "memory"
                  ? "border-purple-100 bg-purple-50/40"
                  : "border-purple-100 bg-purple-50/40"
          }`}
        >
          {intro && <p className="text-sm font-medium text-purple-700">{intro}</p>}
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">{scene.content}</p>
        </div>
      )}

      {scene.type === "choice" && scene.choices && (
        <div>
          {scene.content && (
            <p className="mb-4 text-sm leading-7 text-slate-700 sm:mb-5 sm:text-base sm:leading-8">
              {scene.content}
            </p>
          )}
          <p className="mb-3 text-sm font-medium text-purple-600">What happens next?</p>
          <div className="space-y-3">
            {scene.choices.map((choice) => (
              <Button
                key={choice.id}
                block
                size="large"
                loading={isSaving}
                onClick={() => onChoice(choice)}
                style={{
                  height: "auto",
                  whiteSpace: "normal",
                  textAlign: "left",
                  padding: "14px 16px",
                }}
              >
                {choice.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      {scene.type !== "choice" && (
        <div className="mt-6 flex justify-stretch sm:mt-8 sm:justify-end">
          <Button type="primary" onClick={onNext} block className="sm:w-auto">
            Continue
          </Button>
        </div>
      )}
    </div>
  );
}
