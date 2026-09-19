"use client";

import { useState } from "react";

export type InquiryField = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "textarea";
  required?: boolean;
};

type Props = {
  to: string;
  subject: string;
  fields?: InquiryField[];
  title?: string;
  eyebrow?: string;
  note?: string;
  submitLabel?: string;
  className?: string;
};

const defaultFields: InquiryField[] = [
  { name: "name", label: "Name", placeholder: "Dein Name", required: true },
  {
    name: "email",
    label: "E-Mail",
    type: "email",
    placeholder: "name@beispiel.de",
    required: true,
  },
  {
    name: "message",
    label: "Nachricht",
    type: "textarea",
    placeholder: "Worum geht es?",
    required: true,
  },
];

/**
 * Styled inquiry UI — submits via mailto with composed body (no backend).
 */
export function InquiryForm({
  to,
  subject,
  fields = defaultFields,
  title = "Schreib uns",
  eyebrow = "Nachricht",
  note = "Öffnet dein E-Mail-Programm mit vorausgefüllter Nachricht.",
  submitLabel = "Per E-Mail senden",
  className = "",
}: Props) {
  const [busy, setBusy] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = fields.map((f) => {
      const v = String(fd.get(f.name) || "").trim();
      return `${f.label}: ${v}`;
    });
    const body = lines.join("\n");
    setBusy(true);
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => setBusy(false), 1200);
  }

  const fieldCls =
    "mt-3 block w-full border border-line bg-bg/40 px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-muted/70 outline-none transition-[border-color,background-color] focus:border-accent/60 focus:bg-elev";

  return (
    <form
      onSubmit={onSubmit}
      className={`border border-line bg-elev px-7 py-9 md:px-10 md:py-11 ${className}`}
    >
      <p className="eyebrow text-accent-text">{eyebrow}</p>
      <p className="font-display mt-4 text-[1.85rem] leading-[1.1] md:text-[2.15rem]">{title}</p>

      <div className="mt-8 space-y-6 md:mt-9 md:space-y-7">
        {fields.map((f) => (
          <label key={f.name} className="block">
            <span className="eyebrow text-muted">{f.label}</span>
            {f.type === "textarea" ? (
              <textarea
                name={f.name}
                required={f.required}
                rows={4}
                placeholder={f.placeholder}
                className={`${fieldCls} min-h-[7rem] resize-y`}
              />
            ) : (
              <input
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                placeholder={f.placeholder}
                className={fieldCls}
                autoComplete={f.name === "email" ? "email" : f.name === "name" ? "name" : "on"}
              />
            )}
          </label>
        ))}
      </div>

      <p className="mt-8 text-[0.8rem] leading-relaxed text-muted">{note}</p>

      <button
        type="submit"
        disabled={busy}
        className="group/btn mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-[2px] bg-btn px-7 text-[0.7rem] font-medium tracking-[0.22em] text-btn-ink uppercase transition-opacity duration-500 hover:opacity-85 disabled:opacity-60"
      >
        {busy ? "Öffne …" : submitLabel}
        <svg
          aria-hidden
          viewBox="0 0 20 10"
          className="h-2.5 w-5 transition-transform duration-500 group-hover/btn:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M0 5h19M14.5 0.5 19 5l-4.5 4.5" />
        </svg>
      </button>
    </form>
  );
}
