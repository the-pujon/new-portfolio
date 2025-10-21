export default function Contact() {
  return (
    <section id="contact" className="py-6 pb-10">
      <h2 className="text-3xl font-bold mb-3 text-foreground">GET IN TOUCH</h2>
      <div className="p-3 bg-card">
        <p className="text-foreground mb-3 leading-relaxed text-sm">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to
          collaborate or just say hello!
        </p>
        <div className="space-y-2">
          <div className="pb-2">
            <p className="text-xs font-bold text-foreground mb-1 uppercase">Email</p>
            <a href="mailto:pujon@example.com" className="text-primary hover:underline font-bold text-sm">
              pujon@example.com
            </a>
          </div>
          <div>
            <p className="text-xs font-bold text-foreground mb-2 uppercase">Social Links</p>
            <div className="flex gap-2">
              {[
                { name: "GitHub", url: "#" },
                { name: "LinkedIn", url: "#" },
                { name: "Twitter", url: "#" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-primary hover:underline font-bold text-xs transition-colors px-3 py-1 hover:bg-primary hover:text-primary-foreground"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
