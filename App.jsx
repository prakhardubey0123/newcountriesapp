import React ,{useState}from 'react'
import Header from './components/Header'
import './style.css'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesContainer from './components/CountriesContainer'
const App = () => {
  const [query,setQuery]=useState('')
  return (
    <>
    
    {/* <Header/> */}
    <main>
    <div className='search-filter-container'>
    <SearchBar setQuery={setQuery}/>
    <SelectMenu/>
    </div>
    {/* <CountriesContainer query={query}/> */}
    {query==='unmount'?'':<CountriesContainer query={query}/>}
    </main>

    </>
  )
}

export default App