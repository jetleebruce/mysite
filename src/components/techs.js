import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { motion } from "framer-motion"

import gif from "../images/3.gif"

const TechsWrapper = tw.div`
w-full 
`
const HeaderWrapper = tw.div`
w-full flex justify-center text-3xl pb-8
`

const CardWrapper = tw.div`
w-full grid grid-cols-1
`
const Card = tw.div`
 rounded overflow-hidden 
`
const Icon = tw(motion.img)`
   
`
const CardText = tw.div`
w-full
`
const CardButton = tw.button`
mt-6 rounded-full
`

const Techs = () => (
  <TechsWrapper
    style={{
      backgroundColor: `#141414`,
     
      maxWidth: `1680px`,
      padding: `0 1.0875rem 6rem`,
      position: `relative`,
    }}
  >
    <HeaderWrapper>
      <h2
        style={{
          color: `#ffffff`,
          textTransform: `uppercase`,
        }}
      >
        технологии
      </h2>
    </HeaderWrapper>
    <CardWrapper style={{  gridGap: `3.55em` }}>
      <Link to="https://citronium.ru/case/lukojl/">
        <Icon src={gif} />
      </Link>

      <Card>
        <CardText>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1.2rem`,
              marginBottom: `0.5rem`,
            }}
          >
            HTML, CSS (Sass,Tailwind)
          </h2>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1.2rem`,
              marginBottom: `0.5rem`,
            }}
          >
            React + Redux, Gatsby JS, Next JS
          </h2>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1.2rem`,
              marginBottom: `0.5rem`,
            }}
          >
            JavaScript
          </h2>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1.2rem`,
              marginBottom: `0.5rem`,
            }}
          >
            MongoDB, Apollo, Express, NodeJS
          </h2>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1.2rem`,
              marginBottom: `0.5rem`,
            }}
          >
            GraphQL
          </h2>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1.2rem`,
              marginBottom: `0.5rem`,
            }}
          >
            Firebase
          </h2>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1.2rem`,
              marginBottom: `0.5rem`,
            }}
          >
           WordPress
          </h2>
        </CardText>
      </Card>
    </CardWrapper>
  </TechsWrapper>
)

export default Techs
