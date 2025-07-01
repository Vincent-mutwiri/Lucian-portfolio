// src/components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-secondary">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lucian Talu Mayabi. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  export default Footer;