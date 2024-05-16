import React from 'react'
import Header from './Header'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    
const custrror= useRouteError()
console.log(custrror)
  return (
    <>
    {console.log(custrror)}
    <Header/>
    <h1> Error Occured. {custrror.status}</h1>
    </>
  )
}

export default Error