import React from "react"

import tw from "twin.macro"

const Nav = tw.nav`
flex items-center justify-between flex-wrap p-6 m-0
`
const Logo = tw.div`
flex items-center flex-shrink-0 text-white mr-6
`

const LogoText = tw.span`
font-semibold text-xl tracking-tight
`

const Burger = tw.button`
block lg:hidden
`
const BurgerIcon = tw.div`
flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white
`

const MenuWrapper = tw.div`
w-full block flex-grow lg:flex lg:items-center lg:w-auto
`

const Menu = tw.div`
text-sm lg:flex-grow
`

const Header = () => {
  return (
    <Nav style={{backgroundColor: `pink`}}>
      {/* <Logo>
        <LogoText>Modin Serge</LogoText>
      </Logo> */}
      <Burger>
        <BurgerIcon>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </BurgerIcon>
      </Burger>
      <MenuWrapper>
        <Menu>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a>
        </Menu>
        {/* <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div> */}
      </MenuWrapper>
    </Nav>
  )
}

export default Header
