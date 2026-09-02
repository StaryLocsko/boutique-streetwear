import Link from "next/link";

export default function BrandNotFound() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold text-white">Marque introuvable</h1>
      <p className="text-sm text-zinc-400">Cette marque n&apos;existe pas ou n&apos;est plus disponible.</p>
      <Link
        href="/"
        className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
      >
        ← Retour aux marques
      </Link>
    </main>
  );
}
