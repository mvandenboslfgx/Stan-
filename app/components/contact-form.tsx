"use client";

import { FormEvent, useState } from "react";

type FormState = {
  naam: string;
  email: string;
  bericht: string;
};

const initialState: FormState = {
  naam: "",
  email: "",
  bericht: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.naam.trim() || !form.email.trim() || !form.bericht.trim()) {
      setError("Vul alle velden in.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !data.success) {
        setError(data.error ?? "Versturen is niet gelukt. Probeer opnieuw.");
        return;
      }

      setSuccess("Bedankt! Je bericht is ontvangen. We nemen snel contact op.");
      setForm(initialState);
    } catch {
      setError("Er ging iets mis. Probeer het later opnieuw.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-[#dbe7f7] bg-white p-8"
      noValidate
    >
      <h3 className="mb-4 text-2xl font-bold text-[#0b1f3a]">Vraag direct een offerte aan</h3>
      <p className="text-lg text-[#163764]">
        Laat je gegevens achter en we reageren zo snel mogelijk.
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label htmlFor="naam" className="mb-2 block text-sm text-[#163764]">
            Naam
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            value={form.naam}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, naam: event.target.value }))
            }
            className="w-full rounded-lg border border-[#dbe7f7] bg-white px-4 py-3 text-[#0b1f3a] outline-none ring-[#1f4a82] transition focus:ring-2"
            autoComplete="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-[#163764]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            className="w-full rounded-lg border border-[#dbe7f7] bg-white px-4 py-3 text-[#0b1f3a] outline-none ring-[#1f4a82] transition focus:ring-2"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label htmlFor="bericht" className="mb-2 block text-sm text-[#163764]">
            Bericht
          </label>
          <textarea
            id="bericht"
            name="bericht"
            value={form.bericht}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, bericht: event.target.value }))
            }
            className="min-h-36 w-full rounded-lg border border-[#dbe7f7] bg-white px-4 py-3 text-[#0b1f3a] outline-none ring-[#1f4a82] transition focus:ring-2"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-[#163764] px-6 py-3.5 font-semibold text-white transition hover:scale-105 hover:bg-[#1f4a82] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? "Versturen..." : "Verstuur bericht"}
        </button>

        {error ? <p className="text-sm text-[#7f1d1d]">{error}</p> : null}
        {success ? <p className="text-sm text-[#1f4a82]">{success}</p> : null}
      </div>
    </form>
  );
}
