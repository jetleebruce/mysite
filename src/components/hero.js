import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { motion } from "framer-motion"

import reactIcon from "../images/react.png"
import githubIcon from "../images/github.png"
import js from "../images/jss.svg"

const HeroWrapper = tw.div`
 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:h-screen
`
const ColR = tw.div`
pt-16
`
const ColL = tw.div`
pt-8 sm:pt-8 md:pt-16 lg:pt-48 xl:pt-48
`
const TextHero = tw(motion.p)`
pt-8 pl-16 flex justify-center
`

const TextQuote = tw(motion.div)`
p-1 flex justify-center 
`
const TextSub = tw(motion.p)`
 pb-8 flex justify-center
`
const Icon = tw(motion.img)`
   
`
const IconGit = tw(motion.div)`
  flex justify-center 
`

const Logos = tw.div`
   flex items-center justify-around mb-6 px-16`

const Hero = () => {
  return (
    <HeroWrapper style={{ backgroundColor: `#141414` }}>
      <ColL>
        <TextHero
          style={{
            // fontFamily: `PT Sans sans-serif`,
            fontWeight: `700`,
            fontSize: `5rem`,
            color: `#ffffff`,
          }}
          // transition={{ type: "spring", stiffness: 260, damping: 30 }}
          // animate={{ scale: 0.9 }}
          animate={{ scale: [0, 0, 0, 1], opacity: [0, 0.3, 0.5, 1] }}
          transition={{ duration: 2, ease: "linear" }}
        >
          Serge Modin
        </TextHero>
        <TextSub
          animate={{ opacity: [0, 0, 0, 1] }}
          transition={{ duration: 4, ease: "linear" }}
        >
          <p
            style={{
              // fontFamily: `PT Sans sans-serif`,
              fontSize: `2rem`,
              color: `#ffffff`,
            }}
          >
            Front End Developer
          </p>
        </TextSub>
        <TextQuote
          animate={{ opacity: [0, 0, 0, 1] }}
          transition={{ duration: 5, ease: "linear" }}
        >
          <p
            style={{
              // fontFamily: `PT Sans sans-serif`,
              fontSize: `1.3rem`,
              color: `#ffffff`,
              fontWeight: `300`,
            }}
          >
            Passionate about everything related to web development.<br></br>
            JAM stack fan.<br></br> In the process of non-stop learning in the
            coding world.
          </p>
        </TextQuote>
        <IconGit>
          <Link to="https://github.com/jetleebruce">
            <Icon
              style={{
                width: `8rem`,
              }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              animate={{ scale: 0.5 }}
              src={githubIcon}
            />
          </Link>
        </IconGit>
      </ColL>
      <ColR style={{ display: `flex`, flexDirection: `row` }}>
        <Logos>
          <Icon
            style={{ width: `11rem`, height: `auto` }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={reactIcon}
          />
        </Logos>
        <Logos>
          <Icon
            style={{ width: `11rem`, height: `auto` }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={js}
          />
        </Logos>
      </ColR>
    </HeroWrapper>
  )
}

export default Hero
