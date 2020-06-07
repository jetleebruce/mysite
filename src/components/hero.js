import React from "react"
import tw from "twin.macro"
import { motion } from "framer-motion"

import reactIcon from "../images/react.png"
import githubIcon from '../images/github.png'

const logos = [
  {
    name: "gatsby",
    logo: require("../images/re.png"),
  },
  {
    name: "react",
    logo: require("../images/emotion.png"),
  },
  {
    name: "tailwind",
    logo: require("../images/tailwind.svg"),
  },
]

const HeroWrapper = tw.div`
 flex w-full h-screen
`
const Col = tw.div`
w-1/2 flex flex-col items-center justify-center
`
const TextHero = tw(motion.span)`

`

const TextQuote = tw(motion.p)`

`
const Icon = tw(motion.img)`
   
`

const Logos = tw.div`
   flex items-center justify-around mb-6 px-16`

const Hero = () => {
  return (
    <HeroWrapper style={{ backgroundColor: `#141414` }}>
      <Col>
        <TextHero
          style={{
            fontFamily: `PT Sans sans-serif`,
            fontWeight: `700`,
            fontSize: `5rem`,
            color: `#ffffff`,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          animate={{ scale: 0.9 }}
        >
          Serge Modin
        </TextHero>
        <TextHero
          style={{
            fontFamily: `PT Sans sans-serif`,
            fontSize: `2rem`,
            color: `#ffffff`,
          }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          Front End Developer
        </TextHero>
        <TextQuote
          style={{
            fontFamily: `PT Sans sans-serif`,
            fontSize: `1.2rem`,
            color: `#ffffff`,
            fontWeight: `300`,
            padding: `1rem 6rem`,
          }}
        >
          Passionate about everything related to web development.<br></br> Love
          JAM stack.<br></br> In the process of non-stop learning in the coding
          world.
        </TextQuote>
      </Col>
      <Col>
        <Logos>
          <Icon
            style={{ width: `11rem`, height: `auto` }}
            transition={{ type: "spring", stiffness: 60, damping: 30 }}
            animate={{ scale: 0.5 }}
            src={reactIcon}
          />
          <Icon
            style={{ width: `11rem`, height: `auto`, color: `white` }}
            transition={{ type: "spring", stiffness: 60, damping: 30 }}
            animate={{ scale: 0.5 }}
            src={githubIcon}
          />
        </Logos>
      </Col>
    </HeroWrapper>
  )
}

export default Hero
