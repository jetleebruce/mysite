import React from "react"
import tw from "tailwind.macro"

import Header from '../components/header/header'

const Text = tw.p`
  text-xl text-gray-700 font-sans 
`
const Button = tw.button`
py-5 px-4 bg-blue-600 hover:bg-blue-700 cursor-pointer
`

export default function Home() {
  return (
    <div>
      <Header/>
      <Text> gddhhfjfkfk</Text>
      <Button>Here</Button>
    </div>
  )
}
