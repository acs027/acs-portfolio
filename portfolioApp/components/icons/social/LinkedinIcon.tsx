import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useState } from "react";
import { useColorScheme } from "react-native";

export function LinkedinIcon(props: { size?: number, color?: string, insideColor?: string }) {
  const [hovered, setHovered] = useState(false); 
  const size = hovered ? props.size * 1.2 || 24 * 1.2 : props.size || 24;
  const theme = useColorScheme();
  const color = hovered ? '#ff6347' : props.color || theme === 'dark' ? '#fff' : '#000'; 
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      onMouseEnter={() => setHovered(true)} // Set hover state on mouse enter
      onMouseLeave={() => setHovered(false)} // Reset hover state on mouse leave
    >
    <Path fill={color} d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z" />

    </Svg>
  );
} 