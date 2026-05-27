import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "afrisource_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Slight delay so it doesn't pop in instantly
      const t = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-4 sm:px-6"
      style={{ animation: "slideUpFade 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
    >
      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-white shadow-2xl">
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6">

          {/* Icon + text */}
          <div className="flex min-w-0 flex-1 items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
              <Cookie className="h-5 w-5 text-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">
                We use cookies to improve your experience
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                We use essential cookies to keep the site running and analytics cookies to understand how visitors use it.{" "}
                <Link to="/cookies" className="font-medium text-accent underline-offset-2 hover:underline">
                  Learn more
                </Link>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-shrink-0 items-center gap-3">
            <button
              onClick={decline}
              className="inline-flex items-center rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow transition-colors hover:bg-accent/90"
            >
              Accept All
            </button>
            <button
              onClick={decline}
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary sm:hidden"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
