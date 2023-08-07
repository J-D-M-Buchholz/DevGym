import React from "react"

import "./Editor.css"

const Editor = () => {
  return (
    <section className="task_container">
      <aside>
        <h1>HTML Task Nr. 1</h1>
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
      </aside>

      <details className="editor-container" open>
        <summary>HTML</summary>

        <textarea name="html_editor" id="html_editor" />
      </details>

      <details className="editor-container" open>
        <summary>CSS</summary>
        <textarea name="css_editor" id="css_editor" />
      </details>

      <details className="editor-container" open>
        <summary>Javascript</summary>
        <textarea name="js_editor" id="js_editor" />
      </details>
    </section>
  )
}

export default Editor
