import React from 'react'
import Body from './body/Body'
import Slider from './body/Slider'
import Navmenu from './header/Navmenu'
// import Menu from './body/Menu'


const MainComponents = () => {
  return (
    <>
        <Navmenu/>
        <Slider/>
        <Body></Body>
        {/* <Menu></Menu> */}
        {/* akhane menu import korleo kaj korbe r menu ke body er majhe import kore
        then body ke maincomponents er majhe import korar karon holo menu sokol com
        ponents er mul holo menu so menu ui te content show korabe so menu ke body
        er majhe import kore body ke maincomponents er majhe import kora hoiyese */}
    </>
  )
}

export default MainComponents