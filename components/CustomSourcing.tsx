export default function CustomSourcing() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "33600000000";
  const message = "Salut ! Je cherche une pièce qui n'est pas sur le site : [Photo / Modèle / Taille]";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-10 text-center sm:px-10">
      <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Tu cherches une pièce spécifique ?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
        Une taille, un coloris ou un modèle précis non listé ici ? Envoie-nous la photo et la
        taille sur WhatsApp, on te trouve la pièce sous 24h.
      </p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-950 transition-colors hover:bg-[#1ebe5b]"
      >
        Demander une pièce sur mesure
      </a>
    </section>
  );
}
