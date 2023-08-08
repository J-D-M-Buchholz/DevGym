"use client"

import { useState } from "react"

export default function Editor() {
  const [htmlcode, setHtmlcode] = useState("")
  const [csscode, setCsscode] = useState("")
  const [jscode, setJscode] = useState("")

  const handleHtmlKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setHtmlcode(e.currentTarget.value)
  }
  const handleCssKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setCsscode(e.currentTarget.value)
  }
  const handleJsKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setJscode(e.currentTarget.value)
  }

  return (
    <main className="flex min-h-screen border border-solid  border-white">
      <div className="left">
        <div className="task_container">
          <h1>title</h1>
          <menu>
            <button id="format" type="button" className="menu_button">
              Format
            </button>
            <button id="run" type="button" className="menu_button">
              RUN
            </button>
            <button id="share" type="button" className="menu_button">
              SHARE
            </button>
            <button id="reset" type="button" className="menu_button">
              RESET
            </button>
          </menu>
        </div>
        <div className="editor_wrapper">
          <details className="editor_container" open>
            <summary>HTML</summary>
            <textarea id="html_code" onKeyUp={handleHtmlKeyUp}>
              {htmlcode}
            </textarea>
          </details>
          <details className="editor_container" open>
            <summary>CSS</summary>
            <textarea id="css_code" onKeyUp={handleCssKeyUp}></textarea>
          </details>
          <details className="editor_container" open>
            <summary>Javascript</summary>
            <textarea id="js_code" onKeyUp={handleJsKeyUp}></textarea>
          </details>
        </div>
      </div>
      <div className="output_container">
        <label>Output</label>
        <iframe
          id="output"
          srcDoc={`<html><body>${htmlcode}<style>${csscode}</style><script>${jscode}</script></body></html>`}
        ></iframe>
      </div>
    </main>
  )
}
