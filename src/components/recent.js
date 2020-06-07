import React from "react"
import tw from "twin.macro"

const RecentWrapper = tw.div`
w-full h-screen
`
const HeaderWrapper = tw.div`
w-full 
`
const CardWrapper = tw.div`
w-full flex
`

const Recent = () => {
  return (
    <RecentWrapper style={{ backgroundColor: `#141414` }}>
      <HeaderWrapper>
        <h2
          style={{
            fontFamily: `PT Sans sans-serif`,
            fontWeight: `300`,
            fontSize: `2.5rem`,
                      color: `#ffffff`,
            paddingLeft: `10rem`
          }}
        >
          Recent works
        </h2>
          </HeaderWrapper>
          <CardWrapper>
              
          </CardWrapper>
    </RecentWrapper>
  )
}

export default Recent
