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
    return <div className="min-h-screen bg-[#f6f6f5]" />;
  }

  if (!unlocked) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f6f6f5] px-6">
        <div className="w-full max-w-sm text-center">
          <p className="text-3xl font-semibold tracking-[0.4em] text-zinc-950">NOIR</p>
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
              className="w-full rounded-xl border border-zinc-300 bg-white px-5 py-3.5 text-center text-sm uppercase tracking-widest text-zinc-950 placeholder:text-zinc-400 placeholder:normal-case transition-colors focus:border-zinc-950 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-zinc-950 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-zinc-800"
            >
              Accéder au catalogue
            </button>
          </form>

          <p className="mt-4 h-4 text-xs text-red-500">
            {error ? "Code incorrect. Réessaie." : ""}
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
