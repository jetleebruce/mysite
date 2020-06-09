import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { motion } from "framer-motion"

import background from "../images/re.png"

import onk from "../images/onk.png"
import webpage from "../images/webpage.png"
import luk from "../images/luk.png"

const RecentWrapper = tw.div`
w-full
`
const HeaderWrapper = tw.div`
w-full flex justify-center text-3xl pt-12
`
const CardWrapper = tw.div`
w-full grid grid-cols-1 pt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2
`

const Card = tw.div`
max-w-sm rounded overflow-hidden 
`
const Icon = tw(motion.img)`
   
`
const CardText = tw.div`
w-full text-xl
`
const CardButton = tw.button`
mt-6 rounded-full p-2
`

const Recent = (props) => {
  return (
    <RecentWrapper
      style={{
        backgroundColor: `#141414`,
        margin: `0 auto 0 auto`,
        padding: `0 1.0875rem 6rem`,
        position: `relative`,
      }}
    >
      <HeaderWrapper style={{ color: `#ffffff`, textTransform: `uppercase` }}>
        <Link to="/works">Недавние работы</Link>
      </HeaderWrapper>

      <CardWrapper style={{ gridGap: `3.55em` }}>
        <Link to="https://mystifying-snyder-a361aa.netlify.app/">
          <Icon src={onk} />
        </Link>

        <Card>
          <CardText>
            <p
              style={{
                color: `#ffffff`,
                textTransform: `uppercase`,
              }}
            >
              Создание PWA приложения
            </p>
            <ul style={{ color: `#ffffff`, marginTop: `1.5rem` }}>
              <li>Gatsby JS, TypeScript</li>
              <li>CMS - Wordpress </li>
              <li>Google Maps</li>
              <li>PWA</li>
            </ul>
          </CardText>
          <Link to="https://mystifying-snyder-a361aa.netlify.app/">
            <CardButton
              style={{
                border: `1px solid #ffffff`,
                color: `#ffffff`,
              }}
            >
              Подробнее
            </CardButton>
          </Link>
        </Card>
      </CardWrapper>

      <CardWrapper style={{ gridGap: `3.55em` }}>
        <Link to="https://citronium.ru/case/lukojl/">
          <Icon src={luk} />
        </Link>

        <Card>
          <CardText>
            <h2
              style={{
                color: `#ffffff`,
                textTransform: `uppercase`,
                fontSize: `1.5rem`,
              }}
            >
              Верстка страницы
            </h2>
            <ul style={{ color: `#ffffff`, marginTop: `1.5rem` }}>
              <li>HTML, CSS, Wordpress </li>
              <li>Aдаптивная верстка </li>
            </ul>
          </CardText>
          <Link to="https://citronium.ru/case/lukojl/">
            <CardButton
              style={{
                border: `1px solid #ffffff`,
                padding: `0.7rem `,
                color: `#ffffff`,
              }}
            >
              Подробнее
            </CardButton>
          </Link>
        </Card>
      </CardWrapper>
      <CardWrapper style={{ gridGap: `3.55em` }}>
        <Link to="https://www.webpageperformance.ru/">
          <Icon src={webpage} />
        </Link>

        <Card>
          <CardText>
            <h2
              style={{
                color: `#ffffff`,
                textTransform: `uppercase`,
                fontSize: `1.5rem`,
              }}
            >
              Верстка страницы
            </h2>
            <ul style={{ color: `#ffffff`, marginTop: `1.5rem` }}>
              <li>HTML, CSS, JQuery</li>
              <li>Aдаптивная верстка </li>
            </ul>
          </CardText>
          <Link to="https://www.webpageperformance.ru/">
            <CardButton
              style={{
                border: `1px solid #ffffff`,
                padding: `0.7rem `,
                color: `#ffffff`,
              }}
            >
              Подробнее
            </CardButton>
          </Link>
        </Card>
      </CardWrapper>

      <HeaderWrapper>
        <Link to="/works">
          <h2
            style={{
              fontSize: `1.2rem`,
              color: `#ffffff`,
              textTransform: `uppercase`,
              textDecoration: `underline`,
            }}
          >
            Больше работ
          </h2>
        </Link>
      </HeaderWrapper>
    </RecentWrapper>
  )
}

export default Recent
