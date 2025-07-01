// src/components/Header.tsx
const Header = () => {
    const navLinks = ['About', 'Experience', 'Publications', 'Projects', 'Contact'];
  
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center">
            <a href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold font-heading text-lg">Lucian T. Mayabi</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link}
              </a>
            ))}
          </nav>
          {/* We can add a mobile menu button here later */}
        </div>
      </header>
    );
  };
  export default Header;