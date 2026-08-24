import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">
          Login
        </h1>

        <p className="text-gray-600 mb-6">
          Silakan masuk ke akun Anda.
        </p>

        <LoginForm />
      </div>
    </main>
  );
}