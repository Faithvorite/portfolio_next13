import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
    return (
        <header className="md:px-24 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                {/* Social Icons*/}
                <SocialIcon
                    url="https://github.com/faithvorite"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/faith-nguyen-7524a6245/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://faithnguyenart.vercel.app"
                    fgColor="gray"
                    bgColor="transparent"
                />
            </motion.div>

            
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer"
            >
                <SocialIcon
                href="#contact"
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <Link href="#contact">
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                    Let us connect.
                </p>
            </Link>
            </motion.div>
        </header>
    );
}