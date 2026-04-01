import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "var(--bg)" }}>
      <div className="text-center max-w-sm">
        <p className="text-8xl font-bold mb-6" style={{ color: "var(--accent)" }}>
          404
        </p>
        <h1 className="text-xl font-semibold mb-3" style={{ color: "var(--text)" }}>
          Page not found
        </h1>
        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
          Whatever you were looking for doesn&apos;t exist here.
        </p>
        <Link
          href="/"
          className="text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors"
          style={{
            color: "var(--accent)",
            borderColor: "var(--accent)",
            background: "transparent",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-dim)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          Go back
        </Link>
      </div>
    </div>
  );
}