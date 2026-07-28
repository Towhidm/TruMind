"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import styles from "./login.module.css";

interface PasswordInputProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  minLength?: number;
  label: string;
}

export default function PasswordInput({
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
  required,
  minLength,
  label,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <label className={styles.label}>
      {label}
      <div className={styles.passwordWrap}>
        <input
          className={`${styles.input} ${styles.passwordInput}`}
          type={visible ? "text" : "password"}
          name={name}
          autoComplete={autoComplete}
          required={required}
          minLength={minLength}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
        <button
          type="button"
          className={styles.passwordToggle}
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          tabIndex={-1}
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </label>
  );
}
