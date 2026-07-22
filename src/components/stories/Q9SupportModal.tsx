"use client";

import { Modal } from "antd";
import { Q9_SUPPORT_RESOURCES } from "@/lib/phq9/constants";

interface Q9SupportModalProps {
  open: boolean;
  onClose: () => void;
}

export default function Q9SupportModal({ open, onClose }: Q9SupportModalProps) {
  return (
    <Modal
      title="You are not alone"
      open={open}
      onOk={onClose}
      onCancel={onClose}
      okText="Okay"
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <p className="mb-4 text-slate-600">
        Thank you for telling the truth. If you have dark thoughts, please talk to someone. You
        matter. People want to help you.
      </p>
      <ul className="space-y-2">
        {Q9_SUPPORT_RESOURCES.map((r) => (
          <li key={r.name} className="rounded-lg bg-purple-50 p-3 text-sm">
            <strong className="text-purple-700">{r.name}</strong>
            <br />
            <span className="text-slate-600">{r.contact}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-slate-400">
        This is not a medical test. If you are in danger now, call emergency help.
      </p>
    </Modal>
  );
}
