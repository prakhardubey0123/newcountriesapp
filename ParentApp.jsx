import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const ParentApp = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default ParentApp