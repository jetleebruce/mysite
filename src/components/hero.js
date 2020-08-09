import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { motion } from "framer-motion"

import reactIcon from "../images/react.png"
import githubIcon from "../images/github2.png"
import gatsby from "../images/gatsbyjs.png"
import js from "../images/jss.svg"
import whatsapp from '../images/whatsapp.png'
import telegram from '../images/telegram.png'

const HeroWrapper = tw.div`
 w-full py-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:h-screen xl:grid-cols-2 xl:h-screen
`
const ColR = tw.div`
pt-16 p-0 
`
const ColL = tw.div`
flex items-center flex-col pt-24 sm:pt-24 md:pt-24 lg:pt-64 xl:pt-64
`
const TextHeroWrapper = tw.div`
m-0 
`

const TextHero = tw(motion.p)`
mx-4 text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl
`

const TextQuote = tw(
  motion.div
)` px-6 sm:p-3 md:p-3 lg:p-4 xl:p-0 flex justify-center 
`
const TextSub = tw(motion.p)`
pt-6 pb-2 w-full flex justify-center
`
const IconWrapper = tw.div`
flex flex-row w-48 py-8 justify-center justify-around
`

const Icon = tw(motion.img)`
   
`
const IconGit = tw(motion.div)`
  flex justify-center 
`
const LogosWrapper = tw.div`
flex items-center justify-around w-full mt-8 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-6 px-16
`
const Logos = tw.div`
   `

const Hero = () => {
  return (
    <HeroWrapper style={{ backgroundColor: `#141414` }}>
      <ColL>
        <TextHeroWrapper>
          <TextHero
            style={{
              // fontFamily: `PT Sans sans-serif`,
              fontWeight: `700`,
              // fontSize: `5rem`,
              color: `#ffffff`,
            }}
            // transition={{ type: "spring", stiffness: 260, damping: 30 }}
            // animate={{ scale: 0.9 }}
            animate={{ scale: [0, 0, 0, 1], opacity: [0, 0.3, 0.5, 1] }}
            transition={{ duration: 2, ease: "linear" }}
          >
            Serge Modin
          </TextHero>
        </TextHeroWrapper>
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
              // padding: `2.5rem`,
              color: `#ffffff`,
              fontWeight: `300`,
            }}
          >
            JAMstack enthusiast
          </p>
        </TextQuote>
        <IconWrapper>
          <IconGit>
            <Link to="https://github.com/jetleebruce">
              <Icon
                style={{
                  width: `3rem`,
                }}
                animate={{ opacity: [0, 0, 0, 1] }}
                transition={{ duration: 4, ease: "linear" }}
                src={githubIcon}
              />
            </Link>
          </IconGit>
          <IconGit>
            <Link to="https://wapp.click/79050082028">
              <Icon
                style={{
                  width: `3rem`,
                }}
                animate={{ opacity: [0, 0, 0, 1] }}
                transition={{ duration: 4, ease: "linear" }}
                src={whatsapp}
              />
            </Link>
          </IconGit>
          <IconGit>
            <Link to="https://tlgg.ru/jetleebruce">
              <Icon
                style={{
                  width: `3rem`,
                }}
                animate={{ opacity: [0, 0, 0, 1] }}
                transition={{ duration: 4, ease: "linear" }}
                src={telegram}
              />
            </Link>
          </IconGit>
        </IconWrapper>
      </ColL>
      <ColR style={{ display: `flex`, flexDirection: `row` }}>
        <LogosWrapper>
          <Logos>
            <Icon
              style={{ width: `11rem`, height: `auto` }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ opacity: [0, 0, 0, 1] }}
              transition={{ duration: 5, ease: "linear" }}
              src={reactIcon}
            />
          </Logos>
          <Logos>
            <Icon
              style={{ width: `11rem`, height: `auto` }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ opacity: [0, 0, 0, 1] }}
              transition={{ duration: 5, ease: "linear" }}
              src={js}
            />
          </Logos>
          <Logos>
            <Icon
              style={{ width: `11rem`, height: `auto` }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ opacity: [0, 0, 0, 1] }}
              transition={{ duration: 5, ease: "linear" }}
              src={gatsby}
            />
          </Logos>
        </LogosWrapper>
      </ColR>
    </HeroWrapper>
  )
}

export default Hero
