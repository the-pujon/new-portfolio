"use client"

import type React from "react"

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const parseMarkdown = (text: string) => {
    const lines = text.split("\n")
    const elements: React.ReactNode[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i]

      if (line.startsWith("####")) {
        elements.push(
          <h4 key={i} className="text-base font-bold mt-3 mb-2 text-foreground">
            {line.replace(/^#+\s/, "")}
          </h4>,
        )
      } else if (line.startsWith("###")) {
        elements.push(
          <h3 key={i} className="text-lg font-bold mt-4 mb-2 text-foreground">
            {line.replace(/^#+\s/, "")}
          </h3>,
        )
      } else if (line.startsWith("##")) {
        elements.push(
          <h2 key={i} className="text-xl font-bold mt-4 mb-2 text-foreground">
            {line.replace(/^#+\s/, "")}
          </h2>,
        )
      } else if (line.startsWith("```")) {
        const codeLines: string[] = []
        i++
        while (i < lines.length && !lines[i].startsWith("```")) {
          codeLines.push(lines[i])
          i++
        }
        elements.push(
          <pre key={i} className="bg-secondary p-3 overflow-x-auto my-3 text-xs leading-relaxed">
            <code className="text-foreground">{codeLines.join("\n")}</code>
          </pre>,
        )
      } else if (line.startsWith("-") || line.match(/^\d+\./)) {
        const listItems: string[] = []
        while (i < lines.length && (lines[i].startsWith("-") || lines[i].match(/^\d+\./))) {
          listItems.push(lines[i].replace(/^[-\d.]\s/, ""))
          i++
        }
        i--
        elements.push(
          <ul key={i} className="list-disc list-inside my-2 space-y-1">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-foreground text-sm">
                {item}
              </li>
            ))}
          </ul>,
        )
      } else if (line.trim()) {
        const formattedLine = line
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.*?)\*/g, "<em>$1</em>")
          .replace(/`(.*?)`/g, "<code>$1</code>")

        elements.push(
          <p
            key={i}
            className="text-foreground text-sm leading-relaxed my-2"
            dangerouslySetInnerHTML={{ __html: formattedLine }}
          />,
        )
      } else if (line.trim() === "") {
        elements.push(<div key={i} className="h-2" />)
      }

      i++
    }

    return elements
  }

  return <div className="space-y-2">{parseMarkdown(content)}</div>
}
