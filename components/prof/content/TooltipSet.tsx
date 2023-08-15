import React, { ChangeEvent, ReactNode } from "react"

import "../OpenAIComponant.css"

interface TooltipSetProps {
  children: ReactNode
  maxTokens?: number
  handleMaxTokensChange?: any
  temperature?: number
  handleTemperatureChange?: any
  chatOrCode?: boolean
  handleChatOrCodeChange?: any
}

export default function TooltipSet({
  children,
  maxTokens,
  handleMaxTokensChange,
  temperature,
  handleTemperatureChange,
}: TooltipSetProps) {
  const changeHandler = (e: ChangeEvent): void => {
    handleMaxTokensChange(e)
  }
  const changingHandler = (e: ChangeEvent): void => {
    handleTemperatureChange(e)
  }

  return (
    <div className="gpt_tooltip">
      {children}
      <div className="gpt_tooltiptext2">
        <label htmlFor="max-tokens">
          <strong>Antwortlänge</strong>
          <br />
          Kurz-Lang
        </label>
        <br />
        <input
          id="max-tokens"
          type="range"
          min="200"
          max="2000"
          step="100"
          value={maxTokens}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="temperature">
          <strong>Kreativität</strong>
          <br />
          Genau-Kreativ
        </label>
        <br />
        <input
          id="temperature"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={temperature}
          onChange={changingHandler}
        />
      </div>
    </div>
  )
}
