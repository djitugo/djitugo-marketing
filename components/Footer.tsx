import Link from "next/link";
import { NAV, SITE } from "@/lib/data";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative w-full border-t border-line pt-20 pb-10 md:pt-28">
      <div className="mx-auto max-w-site px-6 md:px-10">
        <Link
          href="/"
          aria-label={`${SITE.name} home`}
          className="inline-block transition hover:opacity-90"
        >
          <Logo className="h-24 w-24 md:h-32 md:w-32" />
          <span className="sr-only">{SITE.name}</span>
        </Link>

        <div className="mt-16 grid grid-cols-12 gap-6 border-t border-line pt-10">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-mono-label uppercase opacity-60">
              Studio
            </div>
            <address className="mt-3 not-italic text-body text-ink-5">
              {SITE.address}
            </address>
            <p className="mt-3 font-mono text-mono-label uppercase opacity-60">
              {SITE.hours}
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-mono-label uppercase opacity-60">
              Reach us
            </div>
            <ul className="mt-3 space-y-2 text-body">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-paper underline-offset-4 hover:underline"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-paper underline-offset-4 hover:underline"
                >
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-mono-label uppercase opacity-60">
              Pages
            </div>
            <ul className="mt-3 space-y-2 text-body">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-paper underline-offset-4 hover:underline"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-mono-label uppercase opacity-60">
              Follow
            </div>
            <ul className="mt-3 space-y-2 text-body">
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-paper underline-offset-4 hover:underline"
                >
                  Instagram, @djitugo
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-paper underline-offset-4 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-paper underline-offset-4 hover:underline"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 font-mono text-mono-label uppercase opacity-60 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {year} {SITE.legalName}</span>
            <Link
              href="/privacy"
              className="underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="underline-offset-4 hover:underline"
            >
              Terms
            </Link>
          </div>
          <div>Made on Bukit Sari Utara, Bali</div>
        </div>
      </div>
    </footer>
  );
}
