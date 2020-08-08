import React from "react"
import tw from "twin.macro"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import Layout from "../components/layout"

import luk from "../images/luk.png"
import webpage from "../images/webpage.png"
import swipe from "../images/swipe.png"
import fizionom from "../images/fizionom.png"
import onk from "../images/onk.png"
import manlaw from "../images/manlaw.png"
import dental from "../images/dental.png"
import vskh from "../images/vskh.jpg"

const WorksWrapper = tw.div`
flex w-full flex-col
`
const HeaderWrapper = tw.div`
w-full flex justify-center pb-8 pt-8 text-3xl
`
const CardWrapper = tw.div`
w-full grid grid-cols-1 
`
const Card = tw.div`
 rounded overflow-hidden p-4
`
const Icon = tw(motion.img)`
   
`

const Works = () => (
  <Layout>
    <WorksWrapper style={{ backgroundColor: `#141414` }}>
      <HeaderWrapper>
        <h2
          style={{
            color: `#ffffff`,
            textTransform: `uppercase`,
          }}
        >
          верстка
        </h2>
      </HeaderWrapper>

      <CardWrapper>
        <Card>
          <Link to="https://citronium.ru/case/lukojl/">
            <Icon src={luk} />
          </Link>
        </Card>
        <Card>
          <Link to="https://www.webpageperformance.ru/">
            <Icon src={webpage} />
          </Link>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <Card>
          <Link to="https://citronium.ru/case/swipewise/">
            <Icon src={swipe} />
          </Link>
        </Card>
        <Card>
          <Link to="https://citronium.ru/case/fizionom-new/">
            <Icon src={fizionom} />
          </Link>
        </Card>
      </CardWrapper>
      <HeaderWrapper>
        <h2
          style={{
            color: `#ffffff`,
            textTransform: `uppercase`,
          }}
        >
          разработка
        </h2>
      </HeaderWrapper>

      <CardWrapper>
        <Card>
          <Link to="https://khurtinv.netlify.app/">
            <Icon src={vskh} />
          </Link>
        </Card>

        <Card>
          <Link to="https://manandlaw.info/">
            <Icon src={manlaw} />
          </Link>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <Card>
          <Link to="http://dentalstudia12.ru/">
            <Icon src={dental} />
          </Link>
        </Card>
        <Card>
          <Link to="https://mystifying-snyder-a361aa.netlify.app/">
            <Icon src={onk} />
          </Link>
        </Card>
      </CardWrapper>
    </WorksWrapper>
  </Layout>
)

export default Works
