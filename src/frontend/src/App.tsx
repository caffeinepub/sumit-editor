import {
  Download,
  ExternalLink,
  Film,
  Play,
  Scissors,
  Sparkles,
  Star,
  Video,
  Zap,
} from "lucide-react";

const currentYear = new Date().getFullYear();

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      role="img"
      aria-label="YouTube"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      role="img"
      aria-label="Instagram"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const downloadButtons = [
  {
    id: "capcut",
    name: "CapCut",
    subtitle: "Official Download",
    href: "https://www.capcut.com/",
    icon: <Scissors className="w-8 h-8" />,
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.18 175), oklch(0.45 0.2 155))",
    glow: "oklch(0.55 0.18 175 / 0.4)",
    ocid: "download.capcut.button",
  },
  {
    id: "aftereffects",
    name: "Adobe After Effects",
    subtitle: "Official Download",
    href: "https://www.adobe.com/products/aftereffects.html",
    icon: <Sparkles className="w-8 h-8" />,
    gradient:
      "linear-gradient(135deg, oklch(0.5 0.22 290), oklch(0.4 0.25 310))",
    glow: "oklch(0.5 0.22 290 / 0.4)",
    ocid: "download.aftereffects.button",
  },
  {
    id: "premiere",
    name: "Adobe Premiere Pro",
    subtitle: "Official Download",
    href: "https://www.adobe.com/products/premiere.html",
    icon: <Film className="w-8 h-8" />,
    gradient:
      "linear-gradient(135deg, oklch(0.5 0.2 240), oklch(0.4 0.22 260))",
    glow: "oklch(0.5 0.2 240 / 0.4)",
    ocid: "download.premiere.button",
  },
  {
    id: "alightmotion",
    name: "Alight Motion",
    subtitle: "Official Download",
    href: "https://alightmotion.com/",
    icon: <Zap className="w-8 h-8" />,
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.22 45), oklch(0.55 0.25 10))",
    glow: "oklch(0.65 0.22 45 / 0.4)",
    ocid: "download.alightmotion.button",
  },
];

export default function App() {
  return (
    <div className="noise-overlay min-h-screen relative overflow-x-hidden">
      {/* Hero Section */}
      <section
        data-ocid="hero.section"
        className="relative flex flex-col items-center justify-center px-4 pt-6 pb-12 text-center"
      >
        <div className="relative z-10 flex flex-col items-center gap-5">
          {/* Profile Photo */}
          <div className="relative mt-2 mb-1">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, oklch(0.65 0.22 220), oklch(0.7 0.2 195), oklch(0.6 0.25 240), oklch(0.65 0.22 220))",
                padding: "3px",
                borderRadius: "50%",
                boxShadow:
                  "0 0 40px oklch(0.65 0.22 220 / 0.6), 0 0 80px oklch(0.65 0.22 220 / 0.25)",
              }}
            />
            {/* Spinning animated ring */}
            <div
              className="absolute -inset-1.5 rounded-full animate-spin"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 60%, oklch(0.75 0.22 200 / 0.8) 80%, transparent 100%)",
                animationDuration: "4s",
              }}
            />
            {/* Image container */}
            <div
              className="relative w-36 h-36 rounded-full overflow-hidden"
              style={{
                border: "3px solid oklch(0.65 0.2 220 / 0.7)",
                boxShadow:
                  "0 0 0 1px oklch(0.65 0.2 220 / 0.2), 0 8px 40px oklch(0.3 0.15 220 / 0.5)",
              }}
            >
              <img
                src="/assets/uploads/639524808_17995635671875626_7990281112716500039_n-1-1.jpg"
                alt="Sumit - Professional Video Editor"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Verified badge */}
            <div
              className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 220), oklch(0.45 0.25 240))",
                border: "2px solid oklch(0.1 0.02 220)",
                boxShadow: "0 2px 12px oklch(0.55 0.22 220 / 0.5)",
              }}
            >
              <Play className="w-4 h-4 text-white fill-white" />
            </div>
          </div>

          {/* Name under profile */}
          <div>
            <p
              className="font-display text-base font-semibold tracking-widest uppercase"
              style={{ color: "oklch(0.72 0.15 200)" }}
            >
              Sumit Resourceful
            </p>
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
            style={{
              background: "oklch(0.65 0.18 220 / 0.1)",
              borderColor: "oklch(0.65 0.18 220 / 0.3)",
              color: "oklch(0.8 0.15 200)",
            }}
          >
            <Video className="w-3.5 h-3.5" />
            Professional Video Editing Resources
          </div>

          {/* Brand name */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none glow-text animate-fade-up">
            Sumit Editor
          </h1>

          {/* Tagline */}
          <p
            className="font-body text-lg sm:text-xl md:text-2xl max-w-xl leading-relaxed animate-fade-up"
            style={{
              color: "oklch(0.7 0.05 220)",
              animationDelay: "0.15s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Best Video Editing Tools and Resources
          </p>

          {/* Divider */}
          <div
            className="w-24 h-0.5 rounded-full mt-2"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.65 0.2 220), transparent)",
            }}
          />

          {/* Social Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-md animate-fade-up"
            style={{
              animationDelay: "0.3s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {/* YouTube */}
            <a
              href="http://www.youtube.com/@motivationalmindbooster"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="social.youtube.button"
              className="btn-download flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold text-white relative overflow-hidden group"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.5 0.22 27), oklch(0.42 0.25 15))",
                boxShadow: "0 4px 24px oklch(0.5 0.22 27 / 0.35)",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.24 27), oklch(0.47 0.27 15))",
                }}
              />
              <YouTubeIcon />
              <span className="relative z-10 font-display tracking-wide">
                YouTube Channel
              </span>
              <ExternalLink className="w-4 h-4 relative z-10 opacity-70" />
            </a>

            {/* Instagram - Coming Soon */}
            <div
              data-ocid="social.instagram.button"
              className="btn-download flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold relative overflow-hidden cursor-not-allowed select-none"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.45 0.2 315), oklch(0.4 0.22 290))",
                boxShadow: "0 4px 24px oklch(0.45 0.2 315 / 0.25)",
                opacity: 0.65,
                color: "white",
              }}
            >
              <InstagramIcon />
              <span className="font-display tracking-wide">Instagram Page</span>
              <span
                className="absolute top-1.5 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: "oklch(0.85 0.15 75)",
                  color: "oklch(0.2 0.05 75)",
                }}
              >
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="relative px-4 pb-24 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div
              className="w-8 h-0.5 rounded-full"
              style={{ background: "oklch(0.65 0.2 220)" }}
            />
            <Download
              className="w-5 h-5"
              style={{ color: "oklch(0.75 0.18 200)" }}
            />
            <div
              className="w-8 h-0.5 rounded-full"
              style={{ background: "oklch(0.65 0.2 220)" }}
            />
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.9 0.05 220), oklch(0.75 0.15 200))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Download Software
          </h2>
          <p
            className="font-body text-base"
            style={{ color: "oklch(0.6 0.05 220)" }}
          >
            Get the best professional video editing tools — all free to download
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {downloadButtons.map((btn) => (
            <a
              key={btn.id}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid={btn.ocid}
              className="btn-download group relative flex items-center gap-5 p-6 rounded-2xl border overflow-hidden"
              style={{
                background: "oklch(0.1 0.03 220)",
                borderColor: "oklch(0.25 0.08 220 / 0.5)",
              }}
            >
              {/* Hover gradient background */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: btn.gradient, opacity: 0 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.15";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0";
                }}
              />

              {/* Icon container */}
              <div
                className="relative flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center"
                style={{
                  background: btn.gradient,
                  boxShadow: `0 4px 20px ${btn.glow}`,
                }}
              >
                <span className="text-white">{btn.icon}</span>
              </div>

              {/* Text */}
              <div className="relative flex-1 min-w-0">
                <div
                  className="font-display font-bold text-lg leading-tight mb-1"
                  style={{ color: "oklch(0.95 0.02 220)" }}
                >
                  {btn.name}
                </div>
                <div
                  className="font-body text-sm flex items-center gap-1.5"
                  style={{ color: "oklch(0.62 0.1 200)" }}
                >
                  <Star className="w-3.5 h-3.5" />
                  {btn.subtitle}
                </div>
              </div>

              {/* Arrow */}
              <div
                className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "oklch(0.65 0.18 220 / 0.12)",
                  border: "1px solid oklch(0.65 0.18 220 / 0.25)",
                  color: "oklch(0.75 0.18 200)",
                }}
              >
                <ExternalLink className="w-4 h-4" />
              </div>

              {/* Bottom glow bar */}
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: btn.gradient }}
              />
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        data-ocid="footer.section"
        className="relative border-t py-12 px-4"
        style={{
          borderColor: "oklch(0.22 0.06 220 / 0.5)",
          background: "oklch(0.06 0.02 220 / 0.8)",
        }}
      >
        {/* Footer top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.65 0.2 220 / 0.6), transparent)",
          }}
        />

        <div className="max-w-md mx-auto flex flex-col items-center gap-4 text-center">
          {/* Profile photo */}
          <div
            className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-offset-2 ring-offset-transparent"
            style={{
              boxShadow: "0 0 30px oklch(0.65 0.2 220 / 0.4)",
              border: "2px solid oklch(0.65 0.2 220 / 0.5)",
            }}
          >
            <img
              src="/assets/uploads/639524808_17995635671875626_7990281112716500039_n-1-1.jpg"
              alt="Sumit"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <div>
            <h3 className="font-display text-2xl font-bold glow-text">Sumit</h3>
          </div>

          {/* Created by */}
          <p
            className="font-body text-sm"
            style={{ color: "oklch(0.55 0.05 220)" }}
          >
            Created by{" "}
            <span
              className="font-semibold"
              style={{ color: "oklch(0.72 0.12 200)" }}
            >
              Sumit Resourceful
            </span>
          </p>

          <div
            className="w-16 h-px my-2"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.5 0.1 220 / 0.5), transparent)",
            }}
          />

          {/* Caffeine attribution */}
          <p
            className="font-body text-xs"
            style={{ color: "oklch(0.4 0.04 220)" }}
          >
            © {currentYear}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
              style={{ color: "oklch(0.5 0.08 220)" }}
            >
              Built with ♥ using caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
