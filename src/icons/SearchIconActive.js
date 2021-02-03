import React from 'react'
import {
  View, 
} from "react-native";
import Svg, {Path, Defs, G, Rect} from 'react-native-svg'


const SearchIconActive = () => {
    return (
      <View style={{flexDirection:'column', justifyContent:'center', alignContent:'center', alignItems:'center', marginBottom:-7}}>
        <Svg
      width={24}
      height={24}
      viewBox="0 1 20 15"
      xmlns="http://www.w3.org/2000/svg"
     
    >
      <Path
        d="M18.78 17.72l-5.753-5.748a6.717 6.717 0 001.486-4.222A6.753 6.753 0 007.756 1 6.753 6.753 0 001 7.75a6.753 6.753 0 006.756 6.75c1.591 0 3.053-.55 4.208-1.469l5.754 5.75a.751.751 0 001.062-1.061zM2.501 7.75c0-2.9 2.353-5.25 5.255-5.25a5.253 5.253 0 015.255 5.25c0 1.454-.591 2.77-1.547 3.72 0 0 0 0 0 0s0 0 0 0A5.24 5.24 0 017.755 13a5.253 5.253 0 01-5.255-5.25z"
        fill="#8B64FF"
        fillRule="nonzero"
        stroke="#8B64FF"
      />
    </Svg>
    <Svg
      width={126}
      height={10}
      viewBox="2 12 126 28"
      xmlns="http://www.w3.org/2000/svg"
 
    >
      <Defs></Defs>
      <G transform="translate(30 30)" fill="none" fillRule="evenodd">
        <Rect fill="#8257FF" x={6} y={3} width={74} height={3} rx={1.5} />
        <Rect
          fill="#916BFF"
          filter="url(#prefix__a)"
          width={96}
          height={10}
          rx={2}
        />
      </G>
    </Svg>
    </View>
    )
}

export default SearchIconActive