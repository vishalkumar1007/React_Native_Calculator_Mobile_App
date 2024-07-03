import Svg, { Path, Line, Circle,PolyLine } from 'react-native-svg';

{/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-land-plot"><path d="m12 8 6-3-6-3v10"/><path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"/><path d="m6.49 12.85 11.02 6.3"/><path d="M17.51 12.85 6.5 19.15"/></svg> */}


const currencySvg = <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#cecece"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="lucide lucide-badge-cent"
>
    <Path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <Path d="M12 7v10" />
    <Path d="M15.4 10a4 4 0 1 0 0 4" />
</Svg>

const lengthSvg = <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#cecece"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
>
    <Path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
    <Path d="m14.5 12.5 2-2" />
    <Path d="m11.5 9.5 2-2" />
    <Path d="m8.5 6.5 2-2" />
    <Path d="m17.5 15.5 2-2" />
</Svg>

const speedSvg = <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#cecece"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="lucide lucide-gauge">
    <Path d="M3.34 19a10 10 0 1 1 17.32 0" />
    <Path d="m12 14 4-4" />
</Svg>

const timeSvg = <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#cecece"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="lucide lucide-clock-4">
    <Circle cx="12" cy="12" r="10" />
    <Line x1="12" x2="12" y1="14" y2="8" />
    <Line x1="12" x2="16" y1="14" y2="14" />
</Svg>

const financeSvg = <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#cecece"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="lucide lucide-hand-coins"><Path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /><Path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
    <Path d="m2 16 6 6" />
    <Circle cx="16" cy="9" r="2.9" />
    <Circle cx="6" cy="5" r="3" />
</Svg>
const internetDataSvg = <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#cecece"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="lucide lucide-hard-drive">
    <Line x1="22" x2="2" y1="12" y2="12" />
    <Path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    <Line x1="6" x2="6.01" y1="16" y2="16" />
    <Line x1="10" x2="10.01" y1="16" y2="16" />
</Svg>
const discountSvg = <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#cecece"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="lucide lucide-tags">
    <Path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
    <Path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" />
    <Circle cx="6.5" cy="9.5" r=".5" fill="currentColor" />
</Svg>
const temperatureSvg = <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#cecece"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="lucide lucide-thermometer-sun">
    <Path d="M12 9a4 4 0 0 0-2 7.5" />
    <Path d="M12 3v2" />
    <Path d="m6.6 18.4-1.4 1.4" />
    <Path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    <Path d="M4 13H2" />
    <Path d="M6.34 7.34 4.93 5.93" />
</Svg>
const areaSvg = <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#cecece"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="lucide lucide-land-plot">
    <Path d="m12 8 6-3-6-3v10" />
    <Path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
    <Path d="m6.49 12.85 11.02 6.3" />
    <Path d="M17.51 12.85 6.5 19.15" />
</Svg>


// export { currencySvg, lengthSvg, speedSvg , timeSvg ,financeSvg , internetDataSvg, discountSvg, temperatureSvg, areaSvg}
export { currencySvg,lengthSvg,timeSvg,speedSvg,financeSvg,internetDataSvg,discountSvg,temperatureSvg,areaSvg}