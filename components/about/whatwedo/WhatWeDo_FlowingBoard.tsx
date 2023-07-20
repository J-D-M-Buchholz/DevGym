import React from "react"

import styles from "./WhatWedo.module.css"

export default function WhatWeDo_FlowingBoard() {
  const numberOfDivs = 11
  return (
    <div className="flow-container">
      <div className={styles.flowtext}>
        {Array.from({ length: numberOfDivs }).map((_, index) => (
          <div key={index} className={`${styles.flowwrap} `}>
            DEV GYM
          </div>
        ))}
      </div>
    </div>
  )
}
