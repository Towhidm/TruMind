import AuthShell from "./AuthShell";
import LoginForm from "./LoginForm";
import LoginError from "./LoginError";

export default function LoginPage() {
  return (
    <AuthShell title="Welcome Back" subtitle="Sign in to continue your mental health journey">
      <LoginError />
      <LoginForm />
    </AuthShell>
  );
}
