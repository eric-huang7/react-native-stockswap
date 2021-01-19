import React from "react"
import Svg, { Defs, G, Rect } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title, filter */

function TabActive() {
  return (
    <Svg
      width={146}
      height={68}
      viewBox="0 0 146 68"
      xmlns="http://www.w3.org/2000/svg"
 
    >
      <Defs></Defs>
      <G transform="translate(30 30)" fill="none" fillRule="evenodd">
        <Rect fill="#8257FF" x={6} y={3} width={74} height={3} rx={1.5} />
        <Rect
          fill="#916BFF"
          filter="url(#prefix__a)"
          width={86}
          height={8}
          rx={2}
        />
      </G>
    </Svg>
  )
}

export default TabActive
