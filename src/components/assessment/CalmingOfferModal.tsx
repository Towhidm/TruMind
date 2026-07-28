"use client";

import { Button, Modal } from "antd";
import { Sparkles } from "lucide-react";

interface CalmingOfferModalProps {
  open: boolean;
  onTryActivity: () => void;
  onSkip: () => void;
}

export default function CalmingOfferModal({
  open,
  onTryActivity,
  onSkip,
}: CalmingOfferModalProps) {
  return (
    <Modal
      title="Take a calm moment?"
      open={open}
      onCancel={onSkip}
      footer={null}
      centered
      destroyOnHidden
      width={440}
    >
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50">
            <Sparkles className="h-7 w-7 text-teal-600" />
          </div>
        </div>
        <p className="text-center text-sm leading-relaxed text-slate-600">
          Your answers suggest you may be under more stress right now. A short calming activity
          can help. It is optional — no score, no fail.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
          <Button onClick={onSkip}>Maybe later</Button>
          <Button type="primary" onClick={onTryActivity}>
            Try activity
          </Button>
        </div>
      </div>
    </Modal>
  );
}
