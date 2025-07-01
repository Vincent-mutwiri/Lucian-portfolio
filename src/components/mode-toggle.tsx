import { Sun, Moon, Monitor, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import clsx from "clsx";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();               // "light" | "dark" | "system"

  /* ---------- helpers ---------- */
  const itemBase =
    "flex items-center gap-2 px-4 py-2 text-sm rounded-sm cursor-pointer " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset transition-colors";

  const itemClasses = (mode: string) =>
    clsx(
      itemBase,
      mode === theme
        ? "bg-gray-100 dark:bg-neutral-800 text-primary"
        : "hover:bg-gray-50 dark:hover:bg-neutral-800",
      theme === "light" && "text-gray-900",
      theme === "dark"  && "text-gray-300",
      theme === "system" && "text-gray-700 dark:text-gray-300"
    );

  const RenderItem = (
    mode: "light" | "dark" | "system",
    label: string,
    Icon: React.ElementType
  ) => (
    <DropdownMenuItem
      role="menuitemradio"
      aria-checked={theme === mode}
      disabled={theme === mode}
      onSelect={(e) => {
        e.preventDefault();
        if (theme !== mode) setTheme(mode);
      }}
      className={itemClasses(mode)}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="flex-1">{label}</span>
      {theme === mode && <Check className="h-4 w-4" aria-hidden="true" />}
    </DropdownMenuItem>
  );

  /* ---------- dropdown container colours ---------- */
  const menuBox = clsx(
    "w-40 rounded-md overflow-hidden border shadow-lg transition-colors",
    theme === "light"  && "bg-white  border-gray-200",
    theme === "dark"   && "bg-neutral-900 border-neutral-800",
    theme === "system" && "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800"
  );

  /* ---------- UI ---------- */
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle colour mode"
          className="relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        >
          {/* Only one icon is visible at a time */}
          <Sun
            className={clsx(
              "h-5 w-5 transition-all",
              theme === "light"            && "scale-100 rotate-0",
              (theme === "dark" || theme === "system") && "scale-0 -rotate-90"
            )}
            aria-hidden="true"
          />
          <Moon
            className={clsx(
              "absolute h-5 w-5 transition-all",
              theme === "dark"             && "scale-100 rotate-0",
              (theme === "light" || theme === "system") && "scale-0 rotate-90"
            )}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className={menuBox}>
        {RenderItem("light",  "Light",  Sun)}
        {RenderItem("dark",   "Dark",   Moon)}
        {RenderItem("system", "System", Monitor)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}