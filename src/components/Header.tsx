// src/components/Header.tsx
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "@/components/theme-provider";
import clsx from "clsx";

const Header = () => {
  const navLinks = ["About", "Experience", "Publications", "Projects", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();                       // ← added

  /* background that ignores OS when user chooses Light/Dark */
  const sheetClasses = clsx(
    "w-[300px] border-l",                              // shared
    theme === "light"  && "bg-white  border-gray-200",
    theme === "dark"   && "bg-neutral-900 border-neutral-800",
    theme === "system" && "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800"
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* branding */}
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-heading text-lg">Lucian T. Mayabi</span>
          </a>
        </div>

        {/* desktop links */}
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

        {/* mode-switch + hamburger */}
        <div className="flex items-center gap-2 bg-background">
          <ModeToggle />

          {/* mobile nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>

              {/* ← only this line updated */}
              <SheetContent side="right" className={sheetClasses}>
                <div className="p-4 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold font-heading text-lg text-gray-900 dark:text-white">
                      Menu
                    </span>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                      >
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close</span>
                      </Button>
                    </SheetClose>
                  </div>

                  <nav className="flex-1 flex flex-col space-y-4">
                    {navLinks.map(link => (
                      <SheetClose asChild key={link}>
                        <a
                          href={`#${link.toLowerCase()}`}
                          className="text-lg text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800"
                        >
                          {link}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
