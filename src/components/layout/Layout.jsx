import React from 'react'
import { Header } from './header'

export const Layout = ({ children }) => {
  return (
    <>
        <Header />
        <div>
            {children}
        </div>
        <span>
            <p>footer goes here</p>
        </span>
    </>
  )
}

