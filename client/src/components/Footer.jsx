export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 lg:px-12 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Prabhjot Saini | Indore, MP, India
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Prabh0608"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-github"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/prabhjot-singh-saini-87267b397/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
