import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles";
import mePic from "../public/meUT.jpg";
import Image from "next/image";
import Link from "next/link";
type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "<WebDeveloper />",
            "<UXDesigner />",
            "<ArtistWriterCoder />"
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
  <div className="h-screen min-h-[500px] flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
    <BackgroundCircles />

    <Image src={mePic}
    alt="profile pic"
    className="relative rounded-full h-[200px] w-[200px] mx-auto object-cover"
    
    />
   <div className="z-20">
    <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
    <h1 className="text-4xl lg:text-6xl font-semibold px-10">
    <span className="mr-3">{text}</span>
    <Cursor cursorColor="rgb(107,43,43)" />
    </h1>
    
    <div className="pt-5">
      <Link href="#about">
        <button className="heroButton">About</button>
      </Link >
      <Link href="#education">
        <button className="heroButton">Education</button>
      </Link>
      {/* <Link href="#skills">
        <button className="heroButton">Skills</button>
      </Link> */}
      <Link href="#projects">
        <button className="heroButton">Projects</button>
      </Link>
    </div>
   </div>
  </div>
  )
}

export default Hero