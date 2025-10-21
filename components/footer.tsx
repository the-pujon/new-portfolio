import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-6 border-t border-foreground/20 mt-10 animate-fade-in">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold mb-1">
              "Code is poetry written in a language computers understand"
            </p>
            <p className="text-foreground/60 text-xs">— Crafted with curiosity and coffee</p>
          </div>
          {/* <Link
            href="/dashboard"
            className="px-4 py-2 bg-primary text-primary-foreground font-bold uppercase text-xs hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            EDIT CONTENT
          </Link> */}
        </div>
      </div>
    </footer>
  )
}
