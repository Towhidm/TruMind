import AuthShell from "@/components/auth/AuthShell";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <AuthShell
      title="Create Account"
      subtitle="Start your story-based well-being journey"
    >
      <SignupForm />
    </AuthShell>
  );
}
