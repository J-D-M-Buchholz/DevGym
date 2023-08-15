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
        };${jsCode}</script></body></html>\nFalls die aufgabe erfüllt wurde, sprich etwas lob aus.\nFalls die aufgabe nicht erfüllt wurde, bitte erkläre wie man diese erfüllen kann.\nBitte antworte auf Deutsch!`
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
    <div className="w-full mb-7 flex flex-col justify-center items-center ">
      <div className="output_wrapper w-full flex flex-col items-center justify-center">
        <div className="output_container w-2/4 flex flex-col items-center justify-center rounded-t-md rounded-r-md shadow-md border bg-blue-600 dark:bg-slate-450 dark:border-gray-800">
          <label className="self-start px-2 my-5 rounded-t-l text-white">
            OUTPUT
          </label>

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
            className="btn btn-linear bg-red-500 shadow-md"
            onClick={handleAskProfClick}
          >
            Ask Prof
          </button>
          <button
            className="btn btn-linear shadow-md bg-red-500"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        {apiKeyInputValue === "" ? (
          <p
            style={{
              position: "fixed",
              bottom: "7.5rem",
              right: "7.5rem",
              width: "15rem",
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
                width: "15rem",
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

      <div className="editor_container w-2/4 mb-20 shadow-lg border dark:bg-slate-950 dark:border-gray-800">
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
        <div className="user_input ">
          {activeTab === "html" && (
            <textarea
              value={htmlCode}
              className="code_editor shadow-inner dark:text-white dark:bg-slate-900 bg-gray-100 "
              id="html_code"
              onChange={handleHtmlKeyUp}
            ></textarea>
          )}
          {activeTab === "css" && (
            <textarea
              value={cssCode}
              className="code_editor shadow-inner dark:text-white dark:bg-slate-900 bg-gray-100"
              id="css_code"
              onChange={handleCssKeyUp}
            ></textarea>
          )}
          {activeTab === "js" && (
            <textarea
              value={jsCode}
              className="code_editor shadow-inner dark:text-white dark:bg-slate-900 bg-gray-100"
              id="js_code"
              onChange={handleJsKeyUp}
            ></textarea>
          )}
        </div>
      </div>
    </div>
  )
}

export default Editor
