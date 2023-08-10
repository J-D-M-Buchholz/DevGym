import { useState } from "react"

import TabNavItem from "./TabNav/TabNavItem"

const Editor = () => {
  const [activeTab, setActiveTab] = useState("html")
  const [htmlCode, setHtmlCode] = useState("")
  const [cssCode, setCssCode] = useState("")
  const [jsCode, setJsCode] = useState("")

  const handleHtmlKeyUp = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlCode(e.currentTarget.value)
  }
  const handleCssKeyUp = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCssCode(e.currentTarget.value)
  }
  const handleJsKeyUp = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsCode(e.currentTarget.value)
  }

  const handleReset = () => {
    setHtmlCode("")
    setCssCode("")
    setJsCode("")
  }

  return (
    <div className="editor_wrapper w-full mb-7 flex flex-col justify-center items-center ">
      <div className="editor_container w-2/4 shadow-lg mb-20">
        <ul className="tab_nav [&>*:nth-child(1)]:rounded-tl-md [&>*:last-child]:rounded-tr-md">
          <TabNavItem
            title="HTML"
            id="html"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="CSS"
            id="css"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="JS"
            id="js"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        <div className="user_input">
          {activeTab === "html" && (
            <textarea
              value={htmlCode}
              className="code_editor"
              id="html_code"
              onChange={handleHtmlKeyUp}
            ></textarea>
          )}
          {activeTab === "css" && (
            <textarea
              value={cssCode}
              className="code_editor"
              id="css_code"
              onChange={handleCssKeyUp}
            ></textarea>
          )}
          {activeTab === "js" && (
            <textarea
              value={jsCode}
              className="code_editor"
              id="js_code"
              onChange={handleJsKeyUp}
            ></textarea>
          )}
        </div>
      </div>
      <div className="rightarea">
        <div className="output_container w-full flex-col">
          <label>Output</label>
          <iframe
            id="output"
            className="output_window"
            srcDoc={`<html><body>${htmlCode}<style>${cssCode}</style><script>const consoleLog = console.log;
            console.log = (...args) => {
              document.body.innerHTML +='<br />' + 'console output:' + args.join(' ') + '<br />';
              consoleLog(...args);
            };${jsCode}</script></body></html>`}
          ></iframe>
        </div>
        <div className="editor_buttons_container">
          <button className="btn btn-linear bg-blue-500">Ask Prof</button>
          <button className="btn btn-linear bg-blue-500" onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-linear bg-blue-500">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Editor
