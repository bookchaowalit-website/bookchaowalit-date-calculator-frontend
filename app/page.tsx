"use client";

import { useState, useMemo, type ReactNode } from "react";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function Shell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-8">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Client-side utility · no server required
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        </header>
        {children}
        <footer className="mt-10 border-t border-zinc-200 pt-4 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          Data stays in your browser. Part of the Bookchaowalit developer tools portfolio.
        </footer>
      </div>
    </div>
  );
}

function Button({
  children,
  onClick,
  variant = "primary",
  disabled,
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition disabled:opacity-50";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
      : variant === "secondary"
        ? "bg-white text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700 dark:hover:bg-zinc-800"
        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900";
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{label}</span>
      {children}
      {hint ? <span className="block text-xs text-zinc-500">{hint}</span> : null}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 font-mono text-sm text-zinc-900 outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100";
const areaClass = `${inputClass} min-h-[160px] resize-y`;

function toInputValue(d: Date) {
  return d.toISOString().slice(0, 10);
}

export default function Home() {
  const today = useMemo(() => new Date(), []);
  const [start, setStart] = useState(toInputValue(today));
  const [end, setEnd] = useState(toInputValue(new Date(today.getTime() + 7 * 86400000)));
  const [base, setBase] = useState(toInputValue(today));
  const [amount, setAmount] = useState(14);
  const [unit, setUnit] = useState<"days" | "weeks" | "months">("days");

  const diff = useMemo(() => {
    const a = new Date(start + "T00:00:00");
    const b = new Date(end + "T00:00:00");
    const ms = b.getTime() - a.getTime();
    const days = Math.round(ms / 86400000);
    return {
      days,
      weeks: (days / 7).toFixed(2),
      months: (days / 30.44).toFixed(2),
    };
  }, [start, end]);

  const shifted = useMemo(() => {
    const d = new Date(base + "T00:00:00");
    if (unit === "days") d.setDate(d.getDate() + amount);
    else if (unit === "weeks") d.setDate(d.getDate() + amount * 7);
    else d.setMonth(d.getMonth() + amount);
    return toInputValue(d);
  }, [base, amount, unit]);

  return (
    <Shell title="Date Calculator" subtitle="How many days between two dates? What date is N days from now?">
      <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-4 text-lg font-medium">Difference</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Start date">
            <input type="date" className={inputClass} value={start} onChange={(e) => setStart(e.target.value)} />
          </Field>
          <Field label="End date">
            <input type="date" className={inputClass} value={end} onChange={(e) => setEnd(e.target.value)} />
          </Field>
        </div>
        <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900">
            <dt className="text-xs text-zinc-500">Days</dt>
            <dd className="text-xl font-semibold">{diff.days}</dd>
          </div>
          <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900">
            <dt className="text-xs text-zinc-500">Weeks</dt>
            <dd className="text-xl font-semibold">{diff.weeks}</dd>
          </div>
          <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900">
            <dt className="text-xs text-zinc-500">~Months</dt>
            <dd className="text-xl font-semibold">{diff.months}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-4 text-lg font-medium">Add / subtract</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Base date">
            <input type="date" className={inputClass} value={base} onChange={(e) => setBase(e.target.value)} />
          </Field>
          <Field label="Amount (negative ok)">
            <input
              type="number"
              className={inputClass}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </Field>
          <Field label="Unit">
            <select className={inputClass} value={unit} onChange={(e) => setUnit(e.target.value as typeof unit)}>
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
            </select>
          </Field>
        </div>
        <p className="mt-4 text-sm">
          Result: <span className="font-mono text-base font-semibold">{shifted}</span>
        </p>
      </section>
    </Shell>
  );
}
