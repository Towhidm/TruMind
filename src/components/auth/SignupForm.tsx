"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signupUser } from "@/actions/auth.actions";
import PasswordInput from "./PasswordInput";
import styles from "./login.module.css";

export default function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signupUser({
        name,
        email,
        password,
        confirmPassword,
        age,
        gender,
        acceptedTerms,
      });

      if (!result.ok) {
        setError(result.error);
        setLoading(false);
        return;
      }

      // Account created — user must sign in separately
      router.push("/login?registered=1");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <p className={styles.formError}>{error}</p>}

      <label className={styles.label}>
        Full name
        <input
          className={styles.input}
          type="text"
          name="name"
          autoComplete="name"
          required
          minLength={2}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </label>

      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </label>

      <PasswordInput
        label="Password"
        name="password"
        value={password}
        onChange={setPassword}
        autoComplete="new-password"
        required
        minLength={8}
        placeholder="At least 8 characters"
      />

      <PasswordInput
        label="Confirm password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={setConfirmPassword}
        autoComplete="new-password"
        required
        minLength={8}
        placeholder="Repeat your password"
      />

      <label className={styles.label}>
        Age
        <input
          className={styles.input}
          type="number"
          name="age"
          inputMode="numeric"
          required
          min={18}
          max={120}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Your age"
        />
      </label>

      <div className={styles.fieldGroup}>
        <span className={styles.fieldLabel}>Gender</span>
        <div className={styles.radioRow}>
          <label className={styles.radioOption}>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
              required
            />
            Male
          </label>
          <label className={styles.radioOption}>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            Female
          </label>
        </div>
      </div>

      <label className={styles.checkRow}>
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
        />
        <span>
          I agree to the{" "}
          <Link href="/terms" className={styles.inlineLink} target="_blank">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className={styles.inlineLink} target="_blank">
            Privacy Policy
          </Link>
          . I understand that story answers create a self-check score, not a medical diagnosis.
        </span>
      </label>

      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? "Creating account..." : "Create account"}
      </button>

      <p className={styles.switchText}>
        Already have an account?{" "}
        <Link href="/login" className={styles.switchLink}>
          Sign in
        </Link>
      </p>
    </form>
  );
}
