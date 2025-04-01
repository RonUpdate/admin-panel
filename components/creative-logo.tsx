import { Palette } from "lucide-react"

export function CreativeLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Palette className="h-6 w-6 text-primary" />
        <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary-foreground" />
      </div>
      <span className="font-bold text-primary">Креатив Фабрика</span>
    </div>
  )
}

