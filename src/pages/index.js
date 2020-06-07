import tw from "twin.macro"
import React from "react"
import SEO from "../components/seo"

import github from "../images/github.svg"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Recent from "../components/recent"

// const logos = [
//   {
//     name: "gatsby",
//     logo: require("../images/gatsby.svg"),
//   },
//   {
//     name: "tailwind",
//     logo: require("../images/tailwind.svg"),
//   },
//   {
//     name: "emotion",
//     logo: require("../images/emotion.png"),
//   },
// ]

// const Wrapper = tw.div`
//   flex items-center justify-center flex-col h-screen
// `

// const Main = tw.div`
//   p-6 bg-gray-100 rounded-lg shadow-2xl
// `

// const Heading = tw.h1`
//   text-2xl text-gray-500 uppercase
// `

// const Text = tw.p`
//   text-xl text-gray-700
// `

// const Logos = tw.div`
//   flex items-center justify-around mb-6 px-16
// `

// const Icon = tw.img`
//   h-10
// `

// const Footer = tw.footer`
//   mt-6 text-center
// `

// const SmallIcon = tw.img`
//   inline-block h-6
// `

const Home = () => (
  <div>
    <Layout>
      <Hero />
      <Recent />
      {/* <Wrapper> 
    <SEO title="Home" />
    <Main>
      <Logos>
        {logos &&
          logos.map(({ name, logo }, index) => (
            <Icon src={logo} alt={`${name} Logo`} key={index} />
          ))}
      </Logos>
      <Heading>Hello, world!</Heading>
      <Text>Welcome to the Gatsby Tailwind CSS + Emotion Starter.</Text>
      <Footer>
        <a
          href="https://github.com/pauloelias/gatsby-tailwind-emotion-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SmallIcon src={github} alt="Github Icon" />
        </a>
      </Footer>
    </Main> 
    </Wrapper> */}
    </Layout>
  </div>
)

export default Home
