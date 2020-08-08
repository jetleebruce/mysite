import tw from "twin.macro"
import React, { useState } from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Recent from "../components/recent"
import Techs from "../components/techs"

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

const FormWrapper = tw.div`
p-8
`

const Home = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  })

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error))
    e.preventDefault()
  }
  return (
    <div>
      <Layout>
        <Hero />
        <Recent />
        <Techs />
        <FormWrapper>
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formState.name}
              placeholder="Enter your name"
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formState.email}
              placeholder="Enter your email"
            />
            <button type="submit">Submit</button>
          </form>
        </FormWrapper>
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
}

export default Home
