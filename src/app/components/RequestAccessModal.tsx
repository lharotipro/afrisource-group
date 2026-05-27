import { useState } from "react";
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const CATEGORIES = [
  "Seafood & Marine",
  "Herbs & Botanicals",
  "Natural Beauty",
  "Agri-Food & Spices",
  "Fresh Produce",
  "Handicrafts & Textiles",
  "Dried & Processed",
  "Other / Not sure yet",
];

// In production (Azure SWA) the API is on the same origin → relative URL ""
// In local dev set VITE_API_URL=http://localhost:7071 in .env.local
const API_BASE: string = import.meta.env.VITE_API_URL ?? "";

interface Props {
  open: boolean;
  category: string;
  onClose: () => void;
}

type Status = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  country: string;
  category: string;
  volume: string;
  message: string;
}

export default function RequestAccessModal({ open, category, onClose }: Props) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    country: "",
    category: category,
    volume: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Sync pre-selected category when prop changes
  if (form.category !== category && status === "idle") {
    setForm((f) => ({ ...f, category }));
  }

  function set(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_BASE}/api/sendEmail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as any).error ?? `Server error ${res.status}`);
      }

      setStatus("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  function handleClose() {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setStatus("idle");
      setErrorMsg("");
      setForm({ name: "", email: "", company: "", country: "", category: "", volume: "", message: "" });
    }, 300);
  }

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
        style={{ animation: "fadeIn 0.2s ease both" }}
      />

      {/* Modal panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed inset-0 z-[9991] flex items-center justify-center p-4"
        style={{ animation: "scaleIn 0.25s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <style>{`
          @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
          @keyframes scaleIn { from { opacity: 0; transform: scale(0.95) translateY(8px) } to { opacity: 1; transform: scale(1) translateY(0) } }
        `}</style>

        <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-border"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          {/* ── Success state ── */}
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 px-8 py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-9 w-9 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Request Received!</h2>
              <p className="text-muted-foreground max-w-sm">
                Mohammed Hayoun will review your request and get back to you within 24 hours. Check your inbox at <strong>{form.email}</strong>.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="bg-primary px-8 pt-8 pb-6 rounded-t-3xl">
                <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Verified Export Categories
                </span>
                <h2 id="modal-title" className="text-2xl font-bold text-white">
                  Request Access
                </h2>
                <p className="mt-1 text-sm text-primary-foreground/60">
                  Tell us what you need — Mohammed will personally review your inquiry within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="John Smith"
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="john@company.com"
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      placeholder="Acme Imports Ltd"
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Country / Market
                    </label>
                    <input
                      type="text"
                      value={form.country}
                      onChange={(e) => set("country", e.target.value)}
                      placeholder="France"
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Product Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => set("category", e.target.value)}
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Select a category…</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Estimated Volume / Specifications
                  </label>
                  <input
                    type="text"
                    value={form.volume}
                    onChange={(e) => set("volume", e.target.value)}
                    placeholder="e.g. 5 tons/month, fresh, EU-certified"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Additional Message
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Any other details about your sourcing needs…"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                  />
                </div>

                {/* Error banner */}
                {status === "error" && (
                  <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
                    <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{errorMsg}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-accent hover:text-accent-foreground disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                  ) : (
                    <><Send className="h-4 w-4" /> Send Sourcing Request</>
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Your information is kept confidential and never shared without your consent.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
