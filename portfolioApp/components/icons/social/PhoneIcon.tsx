import * as React from "react";
import { useState } from "react";
import { useColorScheme } from "react-native";
import Svg, { Path } from "react-native-svg";

export function PhoneIcon(props: { size?: number, color?: string }) {
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
    <Path fill={color} d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z"/>
    </Svg>
  );
} 