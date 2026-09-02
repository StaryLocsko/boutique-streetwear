"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";

const STORAGE_KEY = "noir-gatekeeper-access";
const ACCESS_CODE = process.env.NEXT_PUBLIC_GATEKEEPER_CODE || "NOIR2026";

export default function Gatekeeper({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let granted = false;
    try {
      granted = window.localStorage.getItem(STORAGE_KEY) === "granted";
    } catch {
      granted = false;
    }
    // Lecture différée à l'effet pour que le rendu serveur et le premier rendu client
    // restent identiques (écran verrouillé) et évitent un mismatch d'hydratation.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUnlocked(granted);
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (code.trim().toUpperCase() === ACCESS_CODE.toUpperCase()) {
      try {
        window.localStorage.setItem(STORAGE_KEY, "granted");
      } catch {
        // localStorage indisponible : l'accès reste valide le temps de la session en cours
      }
      setError(false);
      setUnlocked(true);
    } else {
      setError(true);
    }
  }

  if (unlocked === null) {
    return <div className="min-h-screen bg-[#0c0d10]" />;
  }

  if (!unlocked) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0c0d10] px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(210,225,255,0.06),transparent_70%)]"
        />

        <div className="relative w-full max-w-sm text-center">
          <p className="text-3xl font-semibold tracking-[0.4em] text-white">NOIR</p>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-500">
            Private Showroom &amp; Sourcing
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3">
            <input
              type="password"
              value={code}
              onChange={(event) => {
                setCode(event.target.value);
                setError(false);
              }}
              placeholder="Code d'accès"
              aria-label="Code d'accès"
              autoFocus
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3.5 text-center text-sm uppercase tracking-widest text-white placeholder:text-zinc-600 placeholder:normal-case transition-colors focus:border-white/40 focus:bg-white/[0.05] focus:outline-none focus:ring-4 focus:ring-white/5"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-white py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Accéder au catalogue
            </button>
          </form>

          <p className="mt-4 h-4 text-xs text-red-400">
            {error ? "Code incorrect. Réessaie." : ""}
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
