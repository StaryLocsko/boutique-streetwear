export default function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "33600000000";
  const telegramHandle = process.env.NEXT_PUBLIC_TELEGRAM_HANDLE || "boutiquestreetwear";

  return (
    <footer className="mt-16 border-t border-zinc-200/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.3em] text-zinc-950">NOIR</p>
          <p className="mt-2 max-w-sm text-xs text-zinc-500">
            Service assuré du lundi au samedi. Commandes traitées manuellement, réponse sous 24h ouvrées.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-950 hover:text-zinc-950"
          >
            WhatsApp
          </a>
          <a
            href={`https://t.me/${telegramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-950 hover:text-zinc-950"
          >
            Telegram
          </a>
        </div>
      </div>
      <p className="pb-6 text-center text-[11px] text-zinc-400">
        © {new Date().getFullYear()} NOIR — Boutique streetwear. Tous droits réservés.
      </p>
    </footer>
  );
}
