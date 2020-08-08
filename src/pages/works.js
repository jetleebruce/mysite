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
const BackButtonWrapper = tw.div`
pt-8 pl-12 
`

const BackButton = tw.button`
bg-transparent p-4 w-24 hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded
`

const Works = () => (
  <Layout>
    <WorksWrapper style={{ backgroundColor: `#141414` }}>
      <BackButtonWrapper>
        <BackButton>
          <Link to="/">назад</Link>
        </BackButton>
      </BackButtonWrapper>

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
          <a href="https://citronium.ru/case/lukojl/">
            <Icon src={luk} />
          </a>
        </Card>
        <Card>
          <a href="https://www.webpageperformance.ru/">
            <Icon src={webpage} />
          </a>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <Card>
          <a href="https://citronium.ru/case/swipewise/">
            <Icon src={swipe} />
          </a>
        </Card>
        <Card>
          <a href="https://citronium.ru/case/fizionom-new/">
            <Icon src={fizionom} />
          </a>
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
          <a href="https://khurtinv.netlify.app/">
            <Icon src={vskh} />
          </a>
        </Card>

        <Card>
          <a href="https://manandlaw.info/">
            <Icon src={manlaw} />
          </a>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <Card>
          <a href="http://dentalstudia12.ru/">
            <Icon src={dental} />
          </a>
        </Card>
        <Card>
          <a href="https://mystifying-snyder-a361aa.netlify.app/">
            <Icon src={onk} />
          </a>
        </Card>
      </CardWrapper>
    </WorksWrapper>
  </Layout>
)

export default Works
