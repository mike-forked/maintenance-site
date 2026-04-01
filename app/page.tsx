export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center px-6 font-mono">
      <div className="text-center max-w-lg">
        {/* Status dot */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
          </span>
          <span className="text-amber-400 text-xs uppercase tracking-[0.2em]">Maintenance in progress</span>
        </div>

        {/* Heading */}
        <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Well be back soon
        </h1>

        <p className="text-zinc-400 text-base leading-relaxed mb-10">
          The site is currently down for scheduled maintenance.
          <br />
          Sorry for the inconvenience.
        </p>

        {/* Footer */}
        <p className="text-zinc-600 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} - RedFox Studios, All rights reserved.
        </p>
      </div>
    </div>
  );
}