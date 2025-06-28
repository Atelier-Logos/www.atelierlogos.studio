import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
} 