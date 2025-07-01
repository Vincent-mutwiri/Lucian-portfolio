// src/components/theme-provider.tsx
import { createContext, useContext, useEffect, useState } from "react"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: "light" | "dark" | "system"
  storageKey?: string
}

type ThemeProviderState = {
  theme: "light" | "dark" | "system"
  setTheme: (theme: "light" | "dark" | "system") => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">(
    () => (localStorage.getItem(storageKey) as "light" | "dark" | "system") || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    
    // Reset all classes
    root.classList.remove("light", "dark")
    
    // Set the theme class based on the current theme
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
      root.setAttribute('data-theme', systemTheme)
    } else {
      root.classList.add(theme)
      root.setAttribute('data-theme', theme)
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: "light" | "dark" | "system") => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}