import tw from "twin.macro"
import React, { useState } from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Recent from "../components/recent"
import Techs from "../components/techs"

//Form styles

const FormWrapper = tw.div`
w-full justify-center px-12 sm:px-16 md:px-20 lg:px-32 xl:px-64
`
const Form = tw.form`
 flex flex-col 
`
const FormLabel = tw.label`
pb-4 pt-4 text-white
`
const FormInput = tw.input`
h-12 pl-8
`
const FormButtonWrapper = tw.div`
flex justify-center py-16
`
const FormButton = tw.button`
bg-transparent w-48 hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded
`

const HeaderWrapper = tw.div`
w-full flex justify-center text-3xl pt-12 pb-8 gap-4 lg:gap-12 xl:gap-12
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
        <HeaderWrapper
          style={{
            color: `#ffffff`,
            textTransform: `uppercase`,
            backgroundColor: `#141414`,
          }}
        >
          Связь
        </HeaderWrapper>
        <FormWrapper
          style={{
            backgroundColor: `#141414`,
            // margin: `0 auto 0 auto`,
            
          }}
        >
          <Form
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <FormInput type="hidden" name="form-name" value="contact" />
            <FormLabel htmlFor="name">Имя</FormLabel>
            <FormInput
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formState.name}
              placeholder="Представьтесь, пожалуйста!"
            />
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formState.email}
              placeholder="Ваш email"
            />
            <FormButtonWrapper>
              <FormButton type="submit">Отправить</FormButton>
            </FormButtonWrapper>
          </Form>
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
