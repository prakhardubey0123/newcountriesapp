import React, { useEffect, useState } from 'react'
// import countriesData from '../countriesData'
import CountryCard from './CountryCard';

// countriesData.filter((country)=>{
//   const filterredcountry=  country.name.common.toLowerCase().includes('india')
//   console.log(filterredcountry);
// })
const CountriesContainer = ({query}) => {
    // let countriesData=[]
    const [countriesData,setcountriesData]= useState([]);
    
    console.log(countriesData);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all').then((res)=>res.json())
         .then((data)=>{
        //     // countriesData = data
        //     // console.log(countriesData)
             setcountriesData(data)
         })

        //  const intervalid=setInterval(()=>{
        //     console.log("setInterval called")
        //  },[1000]);
        //  console.log(intervalid)
return ()=>{
    console.log("Cleaning up fn");
    // clearInterval(intervalid);
}

    },[])
    
    // if(countriesData.length === 0) {
    //     fetch('https://restcountries.com/v3.1/all').then((res)=>res.json())
    // .then((data)=>{
    //     // countriesData = data
    //     // console.log(countriesData)
    //     setcountriesData(data)
    // })

    // }
    // fetch('https://restcountries.com/v3.1/all').then((res)=>res.json())
    // .then((data)=>{
    //     // countriesData = data
    //     // console.log(countriesData)
    //     setcountriesData(data)
    // })

    
    // const array=[
    //     <CountryCard/>,
    //     <CountryCard/>,
    //     <CountryCard/>,
    //     <CountryCard/>,
    //     <CountryCard/>
    // ]

//     const array= countriesData.map((country)=>{
//      console.log(country);   
//     return <CountryCard key={country.name.common}
//     name={country.name.common} flag={country.flags.svg} population={country.population.toLocaleString('en-IN')} region={country.region} capital={country.capital?.[0]}/>
// })
    // console.log(array)
    return (
     <>  
      {/* <input type="text" /> */}
      <button onClick={()=>(setcountriesData([]))}>Clear</button>
    <div className='countries-container'>
        {
            // array
            countriesData
            .filter((country)=>{
                return country.name.common.toLowerCase().includes(query)}
        ).map((country)=>{
                      console.log(country);   
                     return <CountryCard key={country.name.common}
                     name={country.name.common} flag={country.flags.svg} population={country.population.toLocaleString('en-IN')} region={country.region} capital={country.capital?.[0]}/>
                 })
        }
    </div>
    </>
  )
}

export default CountriesContainer