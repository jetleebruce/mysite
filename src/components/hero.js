import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { motion } from "framer-motion"

import reactIcon from "../images/react.png"
import githubIcon from "../images/github.png"
import js from "../images/jss.svg"

const HeroWrapper = tw.div`
 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2
`
const ColR = tw.div`
pt-16
`
const ColL = tw.div`
pt-8
`
const TextHero = tw(motion.p)`
pt-8 pl-16 flex justify-center
`

const TextQuote = tw(motion.p)`
p-8 flex justify-center text-xl xl:text-base
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
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          animate={{ scale: 0.9 }}
        >
          Serge Modin
        </TextHero>
        <TextSub>
          <p
            style={{
              // fontFamily: `PT Sans sans-serif`,
              fontSize: `2rem`,
              color: `#ffffff`,
            }}
            animate={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            Front End Developer
          </p>
        </TextSub>
        <TextQuote
          style={{
            // fontFamily: `PT Sans sans-serif`,

            color: `#ffffff`,
            fontWeight: `300`,
          }}
        >
          Passionate about everything related to web development.<br></br>
          JAM stack fan.<br></br> In the process of non-stop learning in the
          coding world.
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
