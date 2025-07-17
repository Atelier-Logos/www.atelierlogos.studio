import Link from "next/link"
import Image from "next/image"
import { siGithub, siX, siCaldotcom, siSlack} from "simple-icons"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Hermetic Labs Logo" width={32} height={32} className="dark:brightness-110" />
              <span className="text-lg font-bold">Atelier Logos</span>
            </div>
            <p className="text-sm text-muted-foreground">
            LLM Solutions Studio
            </p>
            <div className="flex gap-4">
              <Link href="https://join.slack.com/t/atelierlogos/shared_invite/zt-384mjl0hs-X2WTb8sc1xFrrDKULcgboQ" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d={siSlack.path} />
                </svg>
                <span className="sr-only">Slack</span>
              </Link>
              <Link href="" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d={siCaldotcom.path} />
                </svg>
                <span className="sr-only">Cal.com</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Atelier Logos LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
