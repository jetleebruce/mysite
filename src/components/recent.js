import React from "react"
import tw from "twin.macro"
import { motion } from "framer-motion"

import background from "../images/re.png"

import background2 from "../images/2.jpg"

const RecentWrapper = tw.div`
w-full
`
const HeaderWrapper = tw.div`
w-full 
`
const CardWrapper = tw.div`
w-full grid grid-cols-3
`

const Card = tw.div`
max-w-sm rounded overflow-hidden shadow-lg
`
const Icon = tw(motion.img)`
   
`

const Recent = (props) => {
  return (
    <RecentWrapper
      style={{
        backgroundColor: `#141414`,
        margin: `0 auto 0 auto`,
        maxWidth: `1680px`,
        padding: `0 1.0875rem 6rem`,
        position: `relative`,
      }}
    >
      <HeaderWrapper>
        <h2
          style={{
            fontFamily: `PT Sans sans-serif`,
            fontWeight: `300`,
            fontSize: `2.5rem`,
            color: `#ffffff`,
            paddingLeft: `10rem`,
          }}
        >
          Recent works
        </h2>
      </HeaderWrapper>
      <CardWrapper style={{ padding: `5rem`, gridGap: `0.85em` }}>
        <Card style={{ height: `25rem` }}>
          <p style={{ color: `white`, position: `absolute` }}>gfhfhjgjk</p>
          <Icon style={{ height: `100%`, width: `auto` }} src={background2} />
        </Card>
        <Card style={{ height: `25rem` }}>
          <Icon style={{ height: `2.5rem`, width: `auto` }} src={background} />
        </Card>
        <Card style={{ height: `25rem` }}>
          <Icon style={{ height: `2.5rem`, width: `auto` }} src={background} />
        </Card>
      </CardWrapper>
    </RecentWrapper>
  )
}

export default Recent
