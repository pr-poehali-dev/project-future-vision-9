export function Footer() {
  return (
    <footer id="contact-info" className="relative z-10 border-t border-white/10 py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-4">
              Контакты
            </p>
            <div className="space-y-3">
              <a
                href="tel:+79888800060"
                className="flex items-center gap-3 font-mono text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                <span className="text-primary">—</span>
                8 (988) 880-00-60
              </a>
              <a
                href="mailto:aslanamojan@icloud.com"
                className="flex items-center gap-3 font-mono text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                <span className="text-primary">—</span>
                aslanamojan@icloud.com
              </a>
              <a
                href="https://t.me/adda_assa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-mono text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                <span className="text-primary">—</span>
                @adda_assa
              </a>
            </div>
          </div>

          <p className="font-mono text-xs text-foreground/20">
            © {new Date().getFullYear()} CHINABOX
          </p>
        </div>
      </div>
    </footer>
  );
}