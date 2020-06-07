import React from "react"
import tw from "twin.macro"

import Header from "./header"

const LayoutWrapper = tw.div`
 
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper >
      {/* <Header /> */}
      {children}
    </LayoutWrapper>
  )
}

export default Layout
