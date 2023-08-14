import { useEffect, useState } from "react"
import OpenAI from "openai-api"

import TabNavItem from "./TabNav/TabNavItem"

const Editor = () => {
  const [activeTab, setActiveTab] = useState("html")
  const [htmlCode, setHtmlCode] = useState("")
  const [cssCode, setCssCode] = useState("")
  const [jsCode, setJsCode] = useState("")
  const [apiKeyInputValue, setApiKeyInputValue] = useState("")
  const [openaiAPIKeyIsValidated, setOpenaiAPIKeyIsValidated] = useState(false)
  const [openaiResponse, setOpenaiResponse] = useState("")

  let openai: OpenAI

  if (openaiAPIKeyIsValidated) {
    openai = new OpenAI(apiKeyInputValue)
  }

  useEffect(() => {
    const storedAPIKey = localStorage.getItem("openaiAPIKey")
    if (storedAPIKey) {
      setApiKeyInputValue(storedAPIKey)
      setOpenaiAPIKeyIsValidated(true)
    }
  }, [])

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

  const handleAskProfClick = async () => {
    if (openaiAPIKeyIsValidated) {
      const selectedQuestion = localStorage.getItem("selectedQuestion")
      const prompt = selectedQuestion
        ? `Bitte prüfe ob diese Aufgabe:\n${selectedQuestion}\ndurch folgenden Code erfüllt wird:\n<html><body>${htmlCode}<style>${cssCode}</style><script>const consoleLog = console.log;
        console.log = (...args) => {
          document.body.innerHTML +='<br />' + 'console output:' + args.join(' ') + '<br />';
          consoleLog(...args);
        };${jsCode}</script></body></html>\nBitte antworte auf Deutsch!`
        : `Bitte Prüfe ob die Syntax von folgenden Code korekt ist:\n<html><body>${htmlCode}<style>${cssCode}</style><script>const consoleLog = console.log;
        console.log = (...args) => {
          document.body.innerHTML +='<br />' + 'console output:' + args.join(' ') + '<br />';
          consoleLog(...args);
        };${jsCode}</script></body></html>\nBitte antworte auf Deutsch!`
      const response = await openai.complete({
        engine: "text-davinci-003",
        prompt,
        maxTokens: 1000,
        temperature: 1,
      })
      setOpenaiResponse(response.data.choices[0].text)
    }
  }

  return (
    <div className="editor_wrapper w-full mb-7 flex flex-col justify-center items-center ">
      <div className="editor_container w-2/4 mb-20">
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
      <div className="output_wrapper w-full flex flex-col items-center justify-center">
        <div className="output_container w-2/4 flex flex-col items-center justify-center">
          <label className="dark:bg-orange-500 rounded-t-l">Output</label>
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
          <button
            className="btn btn-linear bg-blue-500"
            onClick={handleAskProfClick}
          >
            Ask Prof
          </button>
          <button className="btn btn-linear bg-blue-500" onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-linear bg-blue-500">Submit</button>
        </div>
        {apiKeyInputValue === "" ? (
          <p
            style={{
              position: "fixed",
              bottom: "7.5rem",
              right: "7.5rem",
              width:"15rem",
              backgroundColor: "white",
              border: "2px solid black",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            Bitte füge zuerst einen gültigen API Schlüssel hinzu!
          </p>
        ) : (
          openaiResponse !== "" && (
            <p
              style={{
                position: "fixed",
                bottom: "7.5rem",
                right: "7.5rem",
                width:"15rem",
                backgroundColor: "white",
                border: "2px solid black",
                borderRadius: "20px",
                padding: "10px",
              }}
            >
              {openaiResponse}
            </p>
          )
        )}
      </div>
    </div>
  )
}

export default Editor
