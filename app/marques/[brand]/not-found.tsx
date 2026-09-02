import Link from "next/link";

export default function BrandNotFound() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold text-zinc-950">Marque introuvable</h1>
      <p className="text-sm text-zinc-600">Cette marque n&apos;existe pas ou n&apos;est plus disponible.</p>
      <Link
        href="/"
        className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200/80 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-zinc-600 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-colors hover:border-zinc-400 hover:text-zinc-950"
      >
        ← Retour aux marques
      </Link>
    </main>
  );
}
