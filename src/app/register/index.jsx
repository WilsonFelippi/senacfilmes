"use client";
import Input from "@/components/Input";
import { useState } from "react";

export default function Registrar() {
  const [email, setEmail] = useState("jill");
  const [senha, setSenha] = useState("123");
  const [error, setError] = useState("");

  function handleSenha(e) {
    const senha = e.target.value;
    setSenha(senha);
    setError(senha.length < 8 ? "senha muito curta" : "");
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Criar Conta</h1>
      <form className="flex flex-col w-1/3">
        <Input
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          value={senha}
          onChange={handleSenha}
        />
        <p className="text-sm text-gray-400 ">{error}</p>
        <button
          title={error}
          disabled={error}
          className="rounded bg-amber-400 text-black px-5 py-1 hover:bg-amber-300 disabled:bg-slate-400"
        >
          Criar Conta
        </button>
      </form>
    </div>
  );
}
