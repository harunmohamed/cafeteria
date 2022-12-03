import React from 'react'
import NavBar from '../components/NavBar'
import Menu from '../components/Menu'

function Layout({children}) {
  return (
    <>
        <NavBar />
        {children}
    </>
  )
}

export default Layout