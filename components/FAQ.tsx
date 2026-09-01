"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quels sont les délais de livraison ?",
    answer:
      "Comptez entre 2 et 3 semaines à réception du paiement, le temps que votre commande soit préparée puis expédiée.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Wero, Revolut et virement bancaire classique. Les coordonnées vous sont transmises directement sur WhatsApp après validation de votre commande.",
  },
  {
    question: "Livrez-vous partout ?",
    answer:
      "Oui, la livraison est assurée dans toute la France métropolitaine ainsi qu'en Belgique et en Suisse, avec un numéro de suivi transmis dès l'expédition.",
  },
  {
    question: "Comment passer commande ?",
    answer:
      "Ajoutez vos articles au panier puis cliquez sur « Commander sur WhatsApp ». Un récapitulatif détaillé est généré automatiquement, il ne vous reste qu'à l'envoyer.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mt-16 border-t border-zinc-800 pt-10">
      <h2 className="mb-6 text-xl font-semibold text-white">Questions fréquentes</h2>
      <div className="flex flex-col divide-y divide-zinc-800 border-y border-zinc-800">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="text-sm font-medium text-zinc-100">{item.question}</span>
                <span
                  className={`text-lg text-zinc-400 transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {isOpen && <p className="pb-4 text-sm leading-relaxed text-zinc-400">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
