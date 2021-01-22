import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { motion } from "framer-motion"

import onk from "../images/onk.png"
import webpage from "../images/webpage.png"
import luk from "../images/luk.png"
import vskh from "../images/vskh.jpg"
import fs from "../images/fs.jpg"
import chat from "../images/chat.png"

const RecentWrapper = tw.div`
container mx-auto
`
const HeaderWrapper = tw.div`
w-full flex justify-center text-3xl pt-12 pb-8 gap-4 lg:gap-12 xl:gap-12
`
const CardWrapper = tw.div`
w-full grid grid-cols-1 pt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2
`

const Card = tw.div`
max-w-sm rounded overflow-hidden 
`
const Icon = tw(motion.img)`
   p-8
`
const CardText = tw.div`
w-full text-xl p-8
`
const CardButton = tw.button`
mt-6 ml-6 rounded-full p-2
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

      <CardWrapper>
        <a href="https://fs-tech.ru/">
          <Icon src={fs} />
        </a>

        <Card>
          <CardText>
            <h2
              style={{
                color: `#ffffff`,
                textTransform: `uppercase`,
                fontSize: `1.5rem`,
              }}
            >
              Создание сайта
            </h2>
            <ul
              style={{
                color: `#ffffff`,
                marginTop: `1.5rem`,
                fontWeight: `300`,
              }}
            >
              <li>React JS, Gatsby JS </li>
              <li>Styled Components + Tailwind </li>
              <li>Contentful CMS</li>
              <li>Aдаптивная верстка </li>
            </ul>
          </CardText>
          <a href="https://fs-tech.ru/">
            <CardButton
              style={{
                border: `1px solid #ffffff`,
                padding: `0.7rem `,
                color: `#ffffff`,
              }}
            >
              Подробнее
            </CardButton>
          </a>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <a href="https://vshrt.netlify.app/">
          <Icon src={vskh} />
        </a>

        <Card>
          <CardText>
            <h2
              style={{
                color: `#ffffff`,
                textTransform: `uppercase`,
                fontSize: `1.5rem`,
              }}
            >
              Создание сайта
            </h2>
            <ul
              style={{
                color: `#ffffff`,
                marginTop: `1.5rem`,
                fontWeight: `300`,
              }}
            >
              <li>React JS, Gatsby JS </li>
              <li>Styled Components, Contentful CMS</li>
              <li>Aдаптивная верстка </li>
            </ul>
          </CardText>
          <a href="https://vshrt.netlify.app/">
            <CardButton
              style={{
                border: `1px solid #ffffff`,
                padding: `0.7rem `,
                color: `#ffffff`,
              }}
            >
              Подробнее
            </CardButton>
          </a>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <a href="https://chattyappwhatsapp.netlify.app/">
          <Icon src={chat} />
        </a>

        <Card>
          <CardText>
            <h2
              style={{
                color: `#ffffff`,
                textTransform: `uppercase`,
                fontSize: `1.5rem`,
              }}
            >
              Whatsapp Clone
            </h2>
            <ul
              style={{
                color: `#ffffff`,
                marginTop: `1.5rem`,
                fontWeight: `300`,
              }}
            >
              <li>React JS</li>
              <li>Firebase</li>
            </ul>
          </CardText>
          <a href="https://chattyappwhatsapp.netlify.app/">
            <CardButton
              style={{
                border: `1px solid #ffffff`,
                padding: `0.7rem `,
                color: `#ffffff`,
              }}
            >
              Подробнее
            </CardButton>
          </a>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <a href="https://citronium.ru/case/lukojl/">
          <Icon src={luk} />
        </a>

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
            <ul
              style={{
                color: `#ffffff`,
                marginTop: `1.5rem`,
                fontWeight: `300`,
              }}
            >
              <li>HTML, CSS, Wordpress </li>
              <li>Aдаптивная верстка </li>
            </ul>
          </CardText>
          <a href="https://citronium.ru/case/lukojl/">
            <CardButton
              style={{
                border: `1px solid #ffffff`,
                padding: `0.7rem `,
                color: `#ffffff`,
              }}
            >
              Подробнее
            </CardButton>
          </a>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <a href="https://www.webpageperformance.ru/">
          <Icon src={webpage} />
        </a>

        <Card>
          <CardText>
            <h2
              style={{
                color: `#ffffff`,
                textTransform: `uppercase`,
                fontSize: `1.5rem`,
              }}
            >
              Верстка сайта
            </h2>
            <ul
              style={{
                color: `#ffffff`,
                marginTop: `1.5rem`,
                fontWeight: `300`,
              }}
            >
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

      <CardWrapper>
        <a href="https://mystifying-snyder-a361aa.netlify.app/">
          <Icon src={onk} />
        </a>

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
            <ul
              style={{
                color: `#ffffff`,
                marginTop: `1.5rem`,
                fontWeight: `300`,
              }}
            >
              <li>Gatsby JS, TypeScript</li>
              <li>CMS - Wordpress </li>
              <li>Google Maps</li>
              <li>PWA</li>
            </ul>
          </CardText>
          <a href="https://mystifying-snyder-a361aa.netlify.app/">
            <CardButton
              style={{
                border: `1px solid #ffffff`,
                color: `#ffffff`,
              }}
            >
              Подробнее
            </CardButton>
          </a>
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
