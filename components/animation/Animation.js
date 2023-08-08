import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '/public/animation_coding_desk.json'

export default function Animation_coding_desk() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 400, height: 400 }}
    />
  )
}