import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles";
type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi",
            "I'm",
            "Faith"
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
  <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
    <BackgroundCircles />
    <h1>
    <span>{text}</span>
    <Cursor cursorColor="green" />
    </h1>
  </div>
  )
}

export default Hero