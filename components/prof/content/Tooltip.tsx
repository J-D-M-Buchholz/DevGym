import React, { ReactNode } from "react"

import "../OpenAIComponant.css"

interface TooltipProps {
  children: ReactNode
}

export default function Tooltip({ children }: TooltipProps) {
  return (
    <div className="gpt_tooltip">
      {children}
      <span className="gpt_tooltiptext">
        Bitte melden Sie sich auf{" "}
        <a className="gpt_link" href="https://platform.openai.com" target="_blank">
          Platform.OpenAI
        </a>{" "}
        an um Ihren persönlichen API-Schlüssel zu erhalten.
      </span>
    </div>
  )
}
