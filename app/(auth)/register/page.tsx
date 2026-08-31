import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">
          Register
        </h1>

        <p className="text-gray-600 mb-6">
          Buat akun baru.
        </p>

        <RegisterForm />
      </div>
    </main>
  );
}