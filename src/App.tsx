// src/App.tsx
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="bg-background min-h-screen p-10">
      <h1 className="font-heading text-4xl font-bold text-primary">
        Hello Shadcn/UI!
      </h1>
      <p className="mt-4 font-sans text-lg text-foreground">
        Our setup with PNPM, Vite, and Shadcn/UI is complete.
      </p>
      <Button size="lg" className="mt-6">
        This is a Shadcn Button
      </Button>
    </div>
  )
}

export default App