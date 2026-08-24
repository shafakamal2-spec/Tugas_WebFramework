"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Register:", {
      name,
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">
          Nama
        </label>

        <input
          type="text"
          placeholder="Masukkan nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white rounded-lg px-4 py-2"
      >
        Register
      </button>
    </form>
  );
}